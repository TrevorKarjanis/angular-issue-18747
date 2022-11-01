import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator, Validators } from "@angular/forms";

@Directive({
  selector: '[cRequired]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RequiredValidator, multi: true }]
})
export class RequiredValidator implements Validator {
  private initialized = false;

  validate(control: FormControl) {
    if (!this.initialized) {
      this.initialized = true;
      if (control.value === null) return null;
    }

    return Validators.required(control);
  }
}