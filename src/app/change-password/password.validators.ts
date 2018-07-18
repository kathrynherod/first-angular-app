import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise(resolve => {
      if (control.value !== '1234') resolve({ invalidOldPassword: true });
      else resolve(null);
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value)
      return { passwordsShouldMatch: true };

    return null;
  }
  // static passwordsShouldMatch(
  //   control: AbstractControl
  // ): ValidationErrors | null {
  //   let newPassword = control.get('newPassword');
  //   let confirmPassword = control.get('confirmPassword');
  //   if (newPassword.value !== confirmPassword.value) {
  //     return { passwordsShouldMatch: true };
  //   }
  //   return null;
  // }
  // static passwordsShouldMatch(control: AbstractControl) {
  //   let password = control.get('newPassword');
  //   let confirmPassword = control.get('confirmPassword');

  //   if (password.value !== confirmPassword.value) {
  //     console.log('not a match');
  //     return { passwordsShouldMatch: true };
  //   } else {
  //     console.log('MATCH!!!!!');
  //     return null;
  //   }
  // }
}
