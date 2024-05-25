import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
    selectedUser: Contact = {
        _id:'',
        contactname: '',
        contactemail: '',
        contactphone: 0,
        contactmessage:''
      };

      constructor(private http: HttpClient) { }
    
      postcontact(user: Contact){
        return this.http.post(environment.apiBaseUrl+'/contact/',user);
      }
    
      getcontact() {
        return this.http.get(environment.apiBaseUrl + '/contact');
      }
    
      contactupdate(emp:Contact){
          return this.http.put(environment.apiBaseUrl+'/contact/'+emp._id, emp);
        }
      contactdel(emp:Contact){
          return this.http.delete(environment.apiBaseUrl+'/contact/'+emp._id);
        }
      contactdelid(_id:String){
          return this.http.delete(environment.apiBaseUrl+'/contact/'+_id);
        }
}
