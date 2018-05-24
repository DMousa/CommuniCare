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
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { PrescriptionComponent } from 'src/app/prescription/prescription.component';
import { HomeDoctorComponent } from './doctors/home-Doctor/home-Doctor.component';
import { AssignShiftComponent } from './assign-Task/assign-shift/assign-shift.component';
import { AssignTaskComponent } from './assign-Task/assign-Task.component';
import { DoctorsModule } from './doctors/doctors.module';
import { Doctorservice } from './shared/services/doctor.service';



@NgModule({
  declarations: [
    AppComponent,
    HospitalListingComponent,
    HospitalitemComponent,
    HospitalsComponent,
    HospitalDetailsComponent ,
    DoctorScheduleComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent,
   ],
  imports: [
    BrowserModule ,
    DepartmentsModule,
    DoctorsModule
  ],
  providers: [DepartmentService,Doctorservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
