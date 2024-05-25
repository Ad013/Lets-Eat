import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  readonly baseURL = environment.order;
  getorders() {
    return this.http.get(this.baseURL) ;
  }
}
