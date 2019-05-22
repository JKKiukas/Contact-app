import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  private  url: string;

  constructor(private  http: HttpClient) {
    this.url = 'http://localhost:3000/contacts';
  }

  get() {
    return this.http.get(this.url).subscribe((data) => {
      console.log(data);
    });
  }
}
