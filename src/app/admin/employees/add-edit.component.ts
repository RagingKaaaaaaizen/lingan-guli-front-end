import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
})
export class AddEditComponent implements OnInit {
  employee: any = {
    name: '',
    position: '',
    departmentId: null,
    status: 'Active'
  };
  isEditMode = false;
  employeeId: number | null = null;
  departments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.employeeId;

    this.http.get<any[]>('/departments').subscribe((data) => {
      this.departments = data;
    });

    if (this.isEditMode) {
      this.http.get<any>(`/employees/${this.employeeId}`).subscribe((data) => {
        this.employee = data;
      });
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.http.put(`/employees/${this.employeeId}`, this.employee).subscribe(() => {
        this.router.navigate(['/admin/employees']);
      });
    } else {
      this.http.post('/employees', this.employee).subscribe(() => {
        this.router.navigate(['/admin/employees']);
      });
    }
  }
}
