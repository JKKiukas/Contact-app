import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: any;

  constructor(private router: Router, private  route: ActivatedRoute, private contactService: ContactService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(this.contactId).subscribe(response => {
      this.contact = response;
      console.log(this.contact);
    });
  }
}
