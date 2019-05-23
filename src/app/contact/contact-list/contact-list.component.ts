import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  static onContactSelected(contact: Contact): void {
    console.log(contact);
    // this.selectedContactName = contact.firstName + ' ' + contact.lastName + ' ' + contact.phoneNumber;
    // alert(contact.firstName + ' ' + contact.lastName + ' ' + contact.phoneNumber);
    // console.log(this.router.navigate(['/contacts', contact.id]));
    // this.router.navigate(['/contacts', contact.id]);
  }


  ngOnInit() {
    // this.contacts = this.contactService.get();
    // console.log(this.contacts);

    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));
  }

  onContactSelect(contact) {
    this.router.navigate(['/contacts' + contact.id]);
  }
}
