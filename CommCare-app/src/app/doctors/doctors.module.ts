import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctor-listings/doctor-listings.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorItemSmallComponent } from './doctor-item-small/doctor-item-small.component';
import { MenueComponent } from './menue/menue.component';
import { NavDoctorComponent } from './Nav-doctor/Nav-doctor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DoctorsComponent, DoctorDetailsComponent, DoctorListingsComponent, DoctorAddComponent, DoctorItemSmallComponent,
    MenueComponent,
    NavDoctorComponent
]
})
export class DoctorsModule { }
