import { Component, OnInit } from '@angular/core';
import { IPatient } from '../../data/interfaces/IPatient';
import { PatientService } from '../../shared/patient.service';

@Component({
  selector: 'app-patient-listings',
  templateUrl: './patient-listings.component.html',
  styleUrls: ['./patient-listings.component.css']
})
export class PatientListingsComponent implements OnInit {
 patients: IPatient[] = [];
  constructor(private _PatientService: PatientService) { }

  ngOnInit() {
    this.patients = this._PatientService.patient;
  }

}
