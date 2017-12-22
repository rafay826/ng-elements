import {NgModule} from '@angular/core';
import {
  MatRadioModule,
  MatRadioButton,
  MatToolbarModule,
  MatToolbar,
  MatTooltipModule,
} from '@angular/material';
import {CommonModule} from '@angular/common';

export const materialComponents = [
  MatRadioButton,
  MatToolbar
]

const materialImports = [
  MatRadioModule,
  MatToolbarModule,
  MatTooltipModule
]

@NgModule({
  imports: [ ...materialImports, CommonModule ],
  exports: [ ...materialImports ]
})
export class MaterialModule {}
