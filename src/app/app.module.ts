import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MeanStackCrudComponent } from './mean-stack-crud/mean-stack-crud.component';
import { MaterialModule } from './material/material.module';
// import { AddEmployeeComponent } from './mean-stack-crud/add-employee/add-employee.component';
// import { EditEmployeeComponent } from './mean-stack-crud/edit-employee/edit-employee.component';
// import { ListEmployeeComponent } from './mean-stack-crud/list-employee/list-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    // AddEmployeeComponent,
    // EditEmployeeComponent,
    // ListEmployeeComponent,
    // MeanStackCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
