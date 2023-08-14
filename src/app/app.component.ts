import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CustomValidators } from './CustomValidators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        this.asyncInvalidProjectName as AsyncValidatorFn
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });
  }

  onSaveProject() {
    console.log(this.projectForm);
  }

  asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> | null {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'test project') {
          resolve({
            invalidProjectName: true,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }
}
