import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {
  employees: any[] = [];
  departments: any[] = [];
  employeeId: number = 0;
  departmentId: number = 0;
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/employees').subscribe(data => this.employees = data);
    this.http.get<any[]>('/departments').subscribe(data => this.departments = data);
  }

  transfer(): void {
    if (!this.employeeId || !this.departmentId) {
      this.message = 'Please select both employee and department.';
      return;
    }

    this.http.post('/employees/transfer', {
      employeeId: this.employeeId,
      newDepartmentId: this.departmentId
    }).subscribe({
      next: res => this.message = 'Employee transferred successfully.',
      error: err => this.message = 'Transfer failed: ' + err.message
    });
  }
}
