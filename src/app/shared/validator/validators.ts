import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerLeiner = (control: FormControl) => {
  const valor: string = control.value?.trim().toLowerCase();
  if (valor === 'leiner') {
    return {
      noLeiner: true
    }
  }
  return null;
}

export const camposIguales = (campo1: string, campo2: string) => {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const pass1 = formGroup.get(campo1)?.value;
    const pass2 = formGroup.get(campo2)?.value;

    if (pass1 !== pass2) {
      formGroup.get(campo2)?.setErrors({ noIguales: true });
      return {
        noIguales: true
      }
    }

    // formGroup.get(campo2)?.value.setErrors(null);
    return null
  }
}
