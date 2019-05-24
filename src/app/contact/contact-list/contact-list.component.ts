import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../toolbar/toolbar-options';
import {ToolbarAction} from '../toolbar/toolbar-action';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;
  private toolbar: any;
  editingEnabled: boolean;
  private onEdit: any;

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  onContactSelected(contact: Contact): void {
    console.log(contact);
    // this.selectedContactName = contact.firstName + ' ' + contact.lastName + ' ' + contact.phoneNumber;
    // alert(contact.firstName + ' ' + contact.lastName + ' ' + contact.phoneNumber);
    // console.log(this.router.navigate(['/contacts', contact.id]));
    // this.router.navigate(['/contacts', contact.id]);
    console.log(this.router.navigate(['/contacts', contact.id]));
    this.router.navigate(['/contacts', contact.id]);
  }


  ngOnInit() {
    // this.contacts = this.contactService.get();
    // console.log(this.contacts);

    this.contactService.get().subscribe((response => {
      this.contacts = response;
      console.log(response);
    }));
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts',
      [new ToolbarAction(this.onEdit.bind(this), 'icon')]));
  }

  OnEdit() {
    if (this.editingEnabled === false) {
    }
  }

  onContactSelect(contact) {
    this.router.navigate(['/contacts/' + contact.id]);
  }
}
