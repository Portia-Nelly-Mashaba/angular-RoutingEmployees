import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatButtonModule, MatCardModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, EmployeesComponent, UpdateEmployeeComponent, DepartmentsComponent, MenuHeaderComponent, ProjectListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
