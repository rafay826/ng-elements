import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CentrlTooltipComponent} from './centrl-tooltip/centrl-tooltip.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {materialComponents, MaterialModule} from './material.module';

export const CEComponents = [
  HelloWorldComponent,
  CentrlTooltipComponent,
  ...materialComponents
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule
  ],
  declarations: [HelloWorldComponent, CentrlTooltipComponent],
  entryComponents: CEComponents
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
