import { NgModule } from '@angular/core';
import {
  MatRadioModule,
  MatRadioButton,
  MatToolbarModule,
  MatToolbar
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CentrlTooltipComponent} from './centrl-tooltip/centrl-tooltip.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';

export const CEComponents = [
  HelloWorldComponent,
  MatRadioButton,
  MatToolbar,
  CentrlTooltipComponent
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatRadioModule,
    MatToolbarModule
  ],
  declarations: [HelloWorldComponent, CentrlTooltipComponent],
  entryComponents: CEComponents
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
