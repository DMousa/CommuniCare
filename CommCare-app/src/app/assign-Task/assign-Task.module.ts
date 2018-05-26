import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignTaskComponent } from './assign-Task.component';
import { AssignShiftComponent } from './assign-shift/assign-shift.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssignTaskComponent,
    AssignShiftComponent
]
})
export class AssignTaskModule { }
