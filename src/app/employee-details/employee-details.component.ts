import {Component} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  save(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const firstNameInputElement = formElement && formElement.querySelector<HTMLInputElement>('#firstName');
    const lastNameInputElement = formElement && formElement.querySelector<HTMLInputElement>('#lastName');
    if (firstNameInputElement && firstNameInputElement.value
      && lastNameInputElement && lastNameInputElement.value) {
      console.log({firstName: firstNameInputElement.value, lastName: lastNameInputElement.value});
    } else {
      console.error('Input values wrong...');
    }
  }
}
