import { Component, NgModule, Input } from '@angular/core';
import {
  MatRadioModule,
  MatRadioButton,
  MatToolbarModule,
  MatToolbar
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'hello-world',
  template: `
    Hello {{name || 'world'}}!
  `
})
export class HelloWorldComponent {
  @Input() name;
}

@Component({
  selector: 'centrl-tooltip',
  template: `
    <div class="tooltip-container">
      <div class="tooltip">
        {{ text }}
      </div>
    </div>
  `
})
export class TooltipComponent {
  @Input() public text: string;
}

export const CEComponents = [
  HelloWorldComponent,
  MatRadioButton,
  MatToolbar,
  TooltipComponent
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatRadioModule,
    MatToolbarModule
  ],
  declarations: [HelloWorldComponent, TooltipComponent],
  entryComponents: CEComponents
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
