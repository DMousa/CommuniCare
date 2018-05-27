import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctor-listings/doctor-listings.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorItemSmallComponent } from './doctor-item-small/doctor-item-small.component';
import { HomeDoctorComponent } from './home-Doctor/home-Doctor.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarService } from '../shared/Services/CalendarService/Calendar.service';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
  ],
  declarations: 
  [
    DoctorsComponent,
    DoctorDetailsComponent,
    DoctorListingsComponent,
    DoctorAddComponent,
    DoctorItemSmallComponent,
    HomeDoctorComponent,
    DoctorCalendarComponent
],
exports:[
  DoctorsComponent,
  DoctorCalendarComponent
],
providers:
[
  CalendarService,
]

})
export class DoctorsModule { }
