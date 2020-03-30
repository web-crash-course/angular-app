import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Employee {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  @Input()
  set employee(employee: Employee) {
    this.employeeForm.setValue(employee);
  }

  @Output()
  employeeChange = new EventEmitter<Employee>();

  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  }

  save() {
    if (this.employeeForm.valid) {
      const firstName = this.employeeForm.get('firstName').value;
      const lastName = this.employeeForm.get('lastName').value;
      this.employeeChange.emit({firstName, lastName});
    }
  }
}
