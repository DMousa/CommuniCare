import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { DoctorItemSmallComponent } from 'src/app/doctors/doctor-item-small/doctor-item-small.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorItemSmallComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
