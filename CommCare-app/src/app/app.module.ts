import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DoctorScheduleComponent} from 'src/app/doctor-schedule/doctor-schedule.component';
import { OnInit } from '@angular/core';
import { AppComponent } from './app.component';

import { HospitalListingComponent } from './hospitals/hospital-listing/hospital-listing.component';
import {HospitalitemComponent} from './hospitals/hospital-listing/hospitalitem/hospitalitem.component';
import {HospitalsComponent} from './hospitals/hospitals.component';
import {HospitalDetailsComponent} from './hospitals/hospital-details/hospital-details.component';


import { DepartmentsModule } from 'src/app/departments/departments.module';
import { DoctorItemSmallComponent } from 'src/app/doctors/doctor-item-small/doctor-item-small.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { PrescriptionComponent } from 'src/app/prescription/prescription.component';
import { NavDoctorComponent } from 'src/app/doctors/Nav-doctor/Nav-doctor.component';
import { HomeDoctorComponent } from './doctors/home-Doctor/home-Doctor.component';
import { AssignShiftComponent } from './assign-Task/assign-shift/assign-shift.component';
import { AssignTaskComponent } from './assign-Task/assign-Task.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[
{path:'hospitals' , component: HospitalListingComponent},
{path:'hospitals/id' , component: HospitalDetailsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HospitalListingComponent,
    HospitalitemComponent,
    HospitalsComponent,
    HospitalDetailsComponent ,
    DoctorScheduleComponent,
    DoctorItemSmallComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent,
    PrescriptionComponent,
    NavDoctorComponent,
    HomeDoctorComponent,
    AssignShiftComponent,
    AssignTaskComponent

  ],

  imports: [
    BrowserModule ,
    DepartmentsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
