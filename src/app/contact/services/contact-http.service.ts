import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  url: string;
  Contact: number;

  constructor(private  httpClient: HttpClient) {
    // this.url = 'http://localhost:3000/contacts';
    /* Both of these endpointUrl works*/
    this.url = environment.endpointUrl + 'contacts';
    // this.url = `${environment.endpointUrl}contacts`;
  }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact): Observable<any> {
    return this.httpClient.delete(this.url + '/' + contact.id);
  }

  post(contact): Observable<Contact> {
    return this.httpClient.post(this.url, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  put(contact): Observable<Contact> {
    return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map(response => {
      return response as Contact;
    }));
  }
}
