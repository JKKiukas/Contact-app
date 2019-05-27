import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../services/toolbar-service';
import {ToolbarOptions} from '../toolbar/toolbar-options';
import {ToolbarAction} from '../toolbar/toolbar-action';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: number;
  editingEnabled: boolean;

  constructor(private router: Router, private  route: ActivatedRoute,
              private contactService: ContactService, private  toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    console.log(this.contactId);
    let toolbarActions: ToolbarAction[];

    if (isNaN(this.contactId)) {
      this.editingEnabled = true;
      toolbarActions = [];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
      });
    }

    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contacts', toolbarActions));
  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      // Edit mode on
      // console.log('Edit mode enabled');
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      // Edit mode off
      // console.log('Edit mode disabled');
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contacts', toolbarActions));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

  onSave() {
    if (isNaN(this.contactId)) {
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
      });
    } else {
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        this.editingEnabled = false;
      });
    }
  }
}

// let toolbarActions: ToolbarAction[];

// if (this.contactId == null) {
// Create contact
// this.editingEnabled = true;
// toolbarActions = [];
// } else {
// View /Edit contact
// toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

// this.contactService.getContactById(this.contactId).subscribe(response => {
// this.contact = response;
// console.log(this.contact);
// }, error => {
// console.error('Getting contact failed.');
// console.error(error);
// this.router.navigate(['/contacts']);
// });
// }

// this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact',
//  [new ToolbarAction(this.onEdit(), 'edit')]));
// this.contactService.getContactById(this.contactId).subscribe(response => {
//  this.contact = response;
//  console.log(this.contact);
// });
// }

// onDelete() {
//  this.editingEnabled = false;
//  this.contactService.deleteContact(this.contact).subscribe(() => {
//    this.router.navigate(['/contacts']);
//  });
// }
// }
