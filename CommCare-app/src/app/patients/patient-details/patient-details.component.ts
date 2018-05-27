import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from '../../data/interfaces/IPatient';
import { PatientService } from '../../shared/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patients: IPatient[] = [];
  constructor(private _PatientService: PatientService) {
    this.patients = this._PatientService.patient;
  }

  ngOnInit() {
  }

}
