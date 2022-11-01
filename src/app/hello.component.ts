import { Component, Input } from "@angular/core";

@Component({
  selector: 'hello',
  template: ''
})
export class HelloComponent {
  @Input() valid: boolean;
}