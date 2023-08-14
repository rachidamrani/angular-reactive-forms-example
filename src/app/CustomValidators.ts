import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(
    control: FormControl
  ): { [s: string]: boolean } | null {
    if (control.value === 'test') {
      return {
        invalidProjectName: true,
      };
    }
    return null;
  }

  static asyncInvalidProjectName(
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
