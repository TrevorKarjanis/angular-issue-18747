import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!-- The following three elements reproduce the issue. -->
    <p>Valid: {{ name.valid }}</p>
    <p [innerText]="'Valid: ' + name.valid"></p>
    <!-- The following property binding does not affect the DOM. -->
    <hello [valid]="name.valid"></hello>
    <mat-form-field>
      <mat-label>Form field</mat-label>
      <input #name="ngModel" matInput [ngModel]="value" cRequired />
    </mat-form-field>
    <!-- The two following paragraphs do not reproduce the issue. -->
    <p>Valid: {{ name.valid }}</p>
    <p [innerText]="'Valid: ' + name.valid"></p>
  `
})
export class AppComponent  {
  value = `Angular ${VERSION.major}`;
}