import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctors/doctor-listings/doctor-listings.component';
import { DoctorItemSmallComponent } from './doctors/doctor-item-small/doctor-item-small.component';
import { AssignTaskComponent } from './assign-Task/assign-Task.component';

const routes:Routes=[
{path: 'doctordetails', component: DoctorDetailsComponent},
{path: 'doctorlisting', component: DoctorListingsComponent},
{path:'doctoritem',component:DoctorItemSmallComponent},
{path:'assignshift',component:AssignTaskComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ],

})
export class AppRoutingModule { }
