import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSidenavModule, MatDividerModule, MatListModule
} from '@angular/material';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AvatarModule} from 'ngx-avatar';
import {MatToolbarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { ToolbarComponent } from './contact/toolbar/toolbar.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailComponent,
    ToolbarComponent
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
    MatToolbarModule,
    FlexModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
