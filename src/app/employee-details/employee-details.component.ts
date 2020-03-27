import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  }

  save() {
    if (this.employeeForm.valid) {
      const firstName = this.employeeForm.get('firstName');
      const lastName = this.employeeForm.get('lastName');
      console.log({firstName, lastName});
    } else {
      console.error('Input values wrong...');
    }
  }
}
