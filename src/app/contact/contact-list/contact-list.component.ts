import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../toolbar/toolbar-options';
import {ToolbarService} from '../services/toolbar-service';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;
  // private toolbar: any;
  editingEnabled: boolean;
  onEdit: any;

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  ngOnInit() {

    this.contactService.get().subscribe(response => {
      this.contacts = response;
      console.log(response);
    });
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts', []));
  }

  OnEdit() {
    if (this.editingEnabled === false) {
    }
  }

  onContactSelect(contact) {
    this.router.navigate(['/contacts/' + contact.id], {skipLocationChange: true});
  }

  onCreateNew() {
    this.router.navigate(['/contacts/new']);
  }
}
