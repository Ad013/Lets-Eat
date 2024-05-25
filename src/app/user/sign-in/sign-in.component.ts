import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public objects = [];
  constructor(private userService: UserService,private router : Router) { }

  model = {
    email :'',
    password:'',
    roles:'',
  };
  serverErrorMessages: string;
  public adminrole = [];
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/admin');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe({
      next: (res) => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/admin/home');
        // ... Handle the response ...
      },
      error: (err) => {
        // ... Handle the error ...
        // this.serverErrorMessages = err.error.message;
      },
      complete: () => {
        // ... Handle the completion ...
      }
    });
  }


}
