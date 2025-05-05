import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';

import { ListComponent } from './list-component';
import { AddEditComponent } from './add-edit.component';
import { TransferComponent } from './transfer.component';

@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
