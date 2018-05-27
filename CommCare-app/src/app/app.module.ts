import { BrowserModule } from '@angular/platform-browser';
import { NgModule , OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { FooterComponent } from './shared/footer-content/footer.component';
import { HeaderComponent } from './shared/header-content/header.component';

import { DepartmentService } from 'src/app/shared/services/department.service';
import { DepartmentsModule} from 'src/app/departments/departments.module'
import { DoctorsModule } from './doctors/doctors.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    EventsModule,
    BrowserModule ,
    DepartmentsModule,
    DoctorsModule 
   ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
