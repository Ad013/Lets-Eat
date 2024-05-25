import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './categoty.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  readonly baseURL = environment.category;
  getCategory() {
    return this.http.get(this.baseURL) ;
  }
  insertCategory( cat: Category) {
    return this.http.post(this.baseURL, cat);
  }
  updateCategory(cat: Category) {
    return this.http.put(this.baseURL + `/${cat._id}`, cat);
  }
  deleteCategory(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getcatid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
