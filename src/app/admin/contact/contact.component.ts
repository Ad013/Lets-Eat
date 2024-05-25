import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router} from '@angular/router';
import {Contact} from '../../shared/contact.model';
import {ContactService} from '../../shared/contact.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admincontact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class AdminContactComponent implements OnInit {
  public apiurl = environment.BaseUrl;
  trustedUrl;
  public contacts:any = [];
  constructor(private fservice: ContactService , private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }
  getFOoddetails() {
    this.fservice.getcontact().subscribe((res) => {
    this.contacts = res as Contact[];
    });
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
}
  ngOnInit() {
    this.getFOoddetails();
  }

  refresh() {
    this.fservice.getcontact().subscribe((res) => {
      this.contacts = res as Contact[] ;
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.fservice.contactdelid(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }

}
