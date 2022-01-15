import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/navbar/navbar.component';
import { SideNavComponent } from './components/sideNav/side-nav/side-nav.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpTutComponent } from './tut/http-tut/http-tut.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FilterArrayOfCustomersPipe } from './pipes/filter-array-of-Customers.pipe';
import { AuthComponent } from './tut/auth/auth.component';
import { FormsComponent } from './tut/forms/forms.component';
import { FirestoreComponent } from './tut/firestore/firestore.component';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { LogoutDirective } from './directives/logout.directive';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
    ContactsComponent,
    PhoneFormatPipe,
    PageNotFoundComponent,
    CustomersComponent,
    HttpTutComponent,
    CustomersNewComponent,
    OpenCloseComponent,
    CustomersDetailsComponent,
    CustomersEditComponent,
    FilterArrayOfCustomersPipe,
    AuthComponent,
    FormsComponent,
    FirestoreComponent,
    SignWithGoogleDirective,
    LogoutDirective,
    DashboardComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireStorageModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
