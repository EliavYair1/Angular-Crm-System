import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpTutComponent } from './tut/http-tut/http-tut.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { AuthComponent } from './tut/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/customers', pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/new', component: CustomersNewComponent },
      { path: 'customers/:id', component: CustomersDetailsComponent },
      { path: 'customers/:id/edit', component: CustomersEditComponent },
      { path: 'tut/auth', component: AuthComponent },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'openClose',
        component: OpenCloseComponent,
      },
      {
        path: 'tut/http',
        component: HttpTutComponent,
      },
    ],
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
