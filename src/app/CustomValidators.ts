import { FormControl } from '@angular/forms';

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
}
