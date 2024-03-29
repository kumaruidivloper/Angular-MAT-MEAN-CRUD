import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee.component';
import { MatButtonModule, MatButton, MatFormFieldModule, MatInputModule } from '@angular/material';
 
const routes: Routes = [{
 path: "", 
 component: EditEmployeeComponent,
}];
 
@NgModule({
 imports: [
 CommonModule, 
 FormsModule, 
 ReactiveFormsModule, 
 RouterModule.forChild(routes),
 MatButtonModule,
 MatFormFieldModule,
 MatInputModule
 ],
 exports: [
 MatButtonModule,
 MatFormFieldModule,
 MatInputModule
 ],
 declarations: [
 EditEmployeeComponent
 ]
})
export class EditEmployeeModule {}
