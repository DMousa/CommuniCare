import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { PatientsModule } from './patients/patients.module';
import { PatientService } from './shared/patient.service';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';

@NgModule({
  declarations: [
    AppComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    PatientsModule,
    MedicalHistoryModule
  ],
  exports: [
    MedicalHistoryComponent
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
