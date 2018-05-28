import { BrowserModule } from '@angular/platform-browser';
import { NgModule , OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { FooterComponent } from './shared/footer-content/footer.component';
import { HeaderComponent } from './shared/header-content/header.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { PrescriptionComponent } from 'src/app/prescription/prescription.component';
import { AssignTaskComponent } from './assign-Task/assign-Task.component';
import { DoctorsModule } from './doctors/doctors.module';
import { Doctorservice } from './shared/services/doctor.service';
import { AssignTaskModule } from './assign-Task/assign-Task.module';
import { AppRoutingModule } from './/app-routing.module';
import { DepartmentsModule } from './departments/departments.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    EventsModule,
    DepartmentsModule,
    DoctorsModule,
    AssignTaskModule,
    AppRoutingModule
   ],
  providers: [DepartmentService,Doctorservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
