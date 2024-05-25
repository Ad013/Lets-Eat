import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  public selectedCategory = new Category();
  public id: any = '';
  constructor(private route: ActivatedRoute, private router: Router, private catservice: CategoryService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCategory(this.id);
  }
  getCategory(id) {
      this.catservice.getcatid(id).subscribe({
        next: (res) => {
          this.selectedCategory = res as Category;
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
  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      this.catservice.updateCategory(form.value).subscribe((res) => {
      });
      this.router.navigateByUrl('admin/ViewCategory');
    } else {
      this.router.navigate ( [ '/EditCategory', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getCategory(this.id);
    }
}

