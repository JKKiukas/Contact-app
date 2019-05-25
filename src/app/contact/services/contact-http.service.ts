import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  url: string;
  Contact: any;

  constructor(private  httpClient: HttpClient) {
    // this.url = 'http://localhost:3000/contacts';
    /* Both of these endpointUrl works*/
     this.url = environment.endpointUrl + 'contacts';
    // this.url = `${environment.endpointUrl}contacts`;
  }

  // get() {
  // return this.http.get(this.url).subscribe((data) => {
  // console.log(data);
  // });

  // get(): Observable<Contact[]> {
  // return this.http.get<Contact[]>(this.url)
  // .pipe(
  // map(contacts => {
  // return contacts as Contact[];
  // })
  // );

  // get() {
  // return this.httpClient.get<Contact[]>(this.url)
  // .pipe(
  // map(contacts => {
  // return contacts as Contact[];
  // })
  // );
  // }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id): Observable<Contact> {
    return  this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact): Observable<any> {
    return this.httpClient.delete(this.url + '/' + contact.id);
  }
}
