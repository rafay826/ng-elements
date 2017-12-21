import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    Hello {{name || 'world'}}!
  `
})
export class HelloWorldComponent {
  @Input() name;
}
