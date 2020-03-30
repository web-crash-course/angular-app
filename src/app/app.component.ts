import {Component} from '@angular/core';
import {Employee} from './employee-details/employee-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employee: Employee = {firstName: 'John', lastName: 'Example'};
  employeeToSave: Employee;
}
