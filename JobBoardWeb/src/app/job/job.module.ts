import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule
  ],
  exports: [JobsComponent]
})
export class JobModule { }
