import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FoodService } from '../../shared/food.service';
import { CategoryService} from '../../shared/category.service';
import { Category } from '../../shared/categoty.model';
import { Food} from '../../shared/food.model';
import { environment } from '../../../environments/environment';
import { NgUploaderService } from 'ngx-uploader';
const URL=environment.URL;

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  public selectedFood = new Food();
  public category: any = [];
  selectedfile: File | null = null;
  // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private http: HttpClient, 
    private ngUploaderService: NgUploaderService, private router: Router, private catservice: CategoryService, private foodservice: FoodService) { }
  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }
  onSubmit(form: NgForm) {
    if (this.selectedfile !== null)
    form.value.photo = this.selectedfile.name;
    this.selectedFood.fpic = form.value.photo;
    const fd = new FormData();
    if (this.selectedfile !== null) 
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post(environment.URL, fd).subscribe( res => {
    });


   this.foodservice.insertFood(this.selectedFood).subscribe({
    next: (res) => {
      console.log('Success', res)
      // ... Handle the response ...
    },
    error: (err) => {
      // ... Handle the error ...
    },
    complete: () => {
      // ... Handle the completion ...
    }
  });
   alert(' Data Saved Successfully ');
   this.router.navigateByUrl('admin/ViewFood');
  }

}
