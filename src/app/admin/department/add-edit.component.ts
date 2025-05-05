import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {
  id?: number;
  department: any = { name: '', description: '' };
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.departmentService.getById(this.id).subscribe({
        next: dept => this.department = dept,
        error: err => this.errorMessage = 'Department not found.'
      });
    }
  }

  save(): void {
    if (!this.department.name || !this.department.description) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.id) {
      this.departmentService.update(this.id, this.department).subscribe(() => {
        this.router.navigate(['/admin/departments']);
      });
    } else {
      this.departmentService.create(this.department).subscribe(() => {
        this.router.navigate(['/admin/departments']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/departments']);
  }
}
