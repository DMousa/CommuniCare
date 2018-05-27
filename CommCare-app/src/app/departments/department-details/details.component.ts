import { Component, OnInit , Input } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() department: Idepartment;
  constructor(private deptservice:DepartmentService) {
    /* this.department=deptservice.getAll(); */
   }

  ngOnInit() {
  }

}
