import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './list-employee.component';
import { MaterialModule } from './../../material/material.module';

const routes: Routes = [{
  path: "", 
  component: ListEmployeeComponent,
 }];

@NgModule({
  declarations: [
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ListEmployeeModule { }
