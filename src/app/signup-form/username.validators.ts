import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'something') {
          console.log('strings match');
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
  static shouldBeOldPassword(
    control: AbstractControl
  ): ValidationErrors | null {
    return control.value === '1234' ? null : { shouldBeOldPassword: true };
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      console.log('not a match');
      return { passwordsShouldMatch: true };
    } else {
      console.log('MATCH!!!!!');
      return null;
    }
  }

  //trying to write as promise for practice
  // static shouldBeOldPassword(
  //   control: AbstractControl
  // ): Promise<ValidationErrors | null> {
  //   return new Promise((res, rej) => {
  //     control.value === '1234' ? res(null) : res({ shouldBeOldPassword: true });
  //   });
  // }
}
