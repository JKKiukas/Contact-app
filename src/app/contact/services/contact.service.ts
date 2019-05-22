import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private contacts: Contact[];

  constructor(private  contactHttpService: ContactHttpService) {
    /*this.contacts = [
      new Contact( 'Pekka', 'Korhonen', '040123456'),
      new Contact( 'Jouko', 'Virtanen', '040654321'),
      new  Contact( 'Matti', 'Koivunen', '040162534')
    ];
    this.contacts.push(new Contact( 'Kalevi', 'Mäntynen', '040615243'));*/
    // }
    // get(): Contact[] {
    // return this.contacts;
    // console.log(this.contactHttpService.get());
    // return [];
  }
    get(): Observable<Contact[]> {
    return  this.contactHttpService.get();
  }
}
