import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryComponent } from './medical-history.component';
import { MedicalHistoryItemSmallComponent } from './medical-history-item-small/medical-history-item-small.component';
import { MedicalHistoryListingComponent } from './medical-history-listing/medical-history-listing.component';
import { MedicalHistoryAddComponent } from './medical-history-add/medical-history-add.component';
import { MedicalHistoryDetailsComponent } from './medical-history-details/medical-history-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MedicalHistoryComponent,
    MedicalHistoryListingComponent,
    MedicalHistoryDetailsComponent,
    MedicalHistoryAddComponent,
    MedicalHistoryItemSmallComponent
  ],
  declarations: [
    MedicalHistoryComponent,
    MedicalHistoryListingComponent,
    MedicalHistoryDetailsComponent,
    MedicalHistoryAddComponent,
    MedicalHistoryItemSmallComponent]
})
export class MedicalHistoryModule { }
