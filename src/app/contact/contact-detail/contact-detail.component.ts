import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../services/toolbar-service';
import {ToolbarOptions} from '../toolbar/toolbar-options';
import {ToolbarAction} from '../toolbar/toolbar-action';
import {MatSnackBar} from '@angular/material';

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
              private contactService: ContactService, private  toolbar: ToolbarService, public snackBar: MatSnackBar) {
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

    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Edit contact', toolbarActions));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
      this.snackBar.open('Contact deleted', 'OK', {duration: 3000});
    });
  }

  onSave() {
    console.log('Save:' + this.contactId);
    if (isNaN(this.contactId)) {
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
        this.snackBar.open('Contact created', 'OK', {duration: 3000});
      });
    } else {
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        this.editingEnabled = false;
        this.snackBar.open('Contact modified', 'OK', {duration: 3000});
      });
    }
  }
}
