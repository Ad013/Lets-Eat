import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';
import {FoodService } from '../../shared/food.service';
import { Food} from '../../shared/food.model';
import { environment } from '../../../environments/environment';

const URL = environment.URL;

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent implements OnInit {
  public id :any= '';
  public apiurl = environment.BaseUrl;
  public selectedFood = new Food();
  public category :any= [];
  selectedfile: File | null = null;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private route: ActivatedRoute, private router: Router, private catservice: CategoryService ,
    private fservice: FoodService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getfood(this.id);
    this.getCategory();
  }
  getfood(id) {

    this.fservice.getfoodid(id).subscribe({
      next: (res) => {
        this.selectedFood = res as Food;
        // ... Handle the response ...
      },
      error: (err) => {
        // ... Handle the error ...
      },
      complete: () => {
        // ... Handle the completion ...
      }
    });
  }

  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
      this.category = res as Category[];
      });
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }
  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      if (this.selectedfile !== null) 
      form.value.photo = this.selectedfile.name;
      this.selectedFood.fpic = form.value.photo;
      const fd = new FormData();
      if (this.selectedfile !== null)
      fd.append('image', this.selectedfile, this.selectedfile.name);
      this.http.post(environment.URL, fd).subscribe( res => {
      });
      this.fservice.updateFood(this.selectedFood).subscribe((res) => {
        
      });
      this.router.navigateByUrl('admin/ViewFood');
      this.refresh();
    } else {
      this.router.navigate ( [ '/EditCategory', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getfood(this.id);
    }


    getSafeUrl(fpic) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
  }
}
