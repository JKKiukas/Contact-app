import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonToggleModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AvatarModule} from 'ngx-avatar';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AvatarModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
