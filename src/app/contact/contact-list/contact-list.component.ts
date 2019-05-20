import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  onContactSelected(contact: Contact): void {
    console.log(contact);
    alert(contact.firstName + ' ' + contact.lastName + ' ' + contact.phoneNumber);
  }


  ngOnInit() {
    this.contacts.push(new Contact('Pekka', 'Korhonen', '040123456'));
    this.contacts.push(new Contact('Jouko', 'Virtanen', '040654321'));
    this.contacts.push(new Contact('Matti', 'Koivunen', '040162534'));
    console.log(this.contacts);
  }
}
