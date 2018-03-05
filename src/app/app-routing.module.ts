import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {DashbordComponent} from './dashbord/dashbord.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Dashboard',  component: DashbordComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact',     component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
