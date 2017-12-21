import './polyfills';
import {map} from 'rxjs/operators';

import { registerAsCustomElements } from './@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomElementsModule, CEComponents } from './app/app.module';


registerAsCustomElements(CEComponents, () => {
  return platformBrowserDynamic().bootstrapModule(CustomElementsModule);
}).then(_ => {
  const helloWorld: any = document.querySelector('hello-world');
  const radioButtons: any = document.querySelectorAll('mat-radio-button');

  radioButtons.map(btn => {
    btn.addEventListener('change', () => {
      if (btn.checked) {
        helloWorld.name = btn.value;
      }
    })
  });
});

