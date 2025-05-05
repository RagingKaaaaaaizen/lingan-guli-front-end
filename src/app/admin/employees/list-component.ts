import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
})
export class ListComponent implements OnInit {
  account: any;
  employees: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const accountData = localStorage.getItem('account');
    this.account = accountData ? JSON.parse(accountData) : null;

    this.loadEmployees();
  }

  loadEmployees(): void {
    this.http.get<any[]>('/employees').subscribe((data) => {
      this.employees = data;
    });
  }

  add(): void {
    this.router.navigate(['/admin/employees/add']); // Adjust this path if needed
  }

  edit(id: number): void {
    this.router.navigate(['/admin/employees/edit', id]);
  }

  delete(id: number): void {
    this.http.delete(`/employees/${id}`).subscribe(() => {
      this.employees = this.employees.filter((e) => e.id !== id);
    });
  }
}
