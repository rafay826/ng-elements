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

export const CEComponents = [
  HelloWorldComponent,
  MatRadioButton,
  MatToolbar
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatRadioModule,
    MatToolbarModule
  ],
  declarations: [HelloWorldComponent],
  entryComponents: CEComponents
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
