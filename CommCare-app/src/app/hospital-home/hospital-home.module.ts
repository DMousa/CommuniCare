import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HospitalHomeComponent } from 'src/app/hospital-home/hospital-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HospitalHomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HospitalHomeComponent
  ]
})
export class HospiatlHomeModule { }
