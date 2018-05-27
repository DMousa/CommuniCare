import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DoctorScheduleComponent} from 'src/app/doctor-schedule/doctor-schedule.component';
import { OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { DepartmentsModule } from 'src/app/departments/departments.module';
import { DoctorItemSmallComponent } from 'src/app/doctors/doctor-item-small/doctor-item-small.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { RouterModule } from '@angular/router';
import { DepartmentsComponent } from 'src/app/departments/departments.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorScheduleComponent,
    DoctorItemSmallComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule ,
    DepartmentsModule,
    RouterModule.forRoot([
      {path:"departments",component:DepartmentsComponent}
    ])
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
