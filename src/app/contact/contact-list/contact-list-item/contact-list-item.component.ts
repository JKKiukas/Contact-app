import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Contact} from '../../contact';

@Component({
  selector: 'dtca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input()contact: Contact;
  @Output()selected: EventEmitter<Contact>;

  constructor() {
    this.selected = new EventEmitter<Contact>();
    console.log(this.selected);
  }

  ngOnInit() {
  }

  onSelect(contact: Contact) {
    this.selected.emit(contact);
  }
}
