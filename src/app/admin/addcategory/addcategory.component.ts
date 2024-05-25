import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  public selectedCategory = new Category();
  constructor(private router: Router, private catservice: CategoryService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
     if (form.value._id === '' || form.value._id == null) {
      this.catservice.insertCategory(this.selectedCategory).subscribe({
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
    this.router.navigateByUrl('admin/ViewCategory');
     } else {
       console.log(form.value);
     }
    }

}
