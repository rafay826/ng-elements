import './polyfills';

import { registerAsCustomElements } from './@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomElementsModule, CEComponents } from './app/app.module';


registerAsCustomElements(CEComponents, () => {
  return platformBrowserDynamic().bootstrapModule(CustomElementsModule);
}).then(_ => {
  const helloWorld: Element | any = document.querySelector('hello-world');
  const radioButtons: NodeListOf<Element> | any = document.querySelectorAll('mat-radio-button');

  radioButtons.forEach(btn => {
    btn.addEventListener('change', () => {
      if (btn.checked) {
        helloWorld.name = btn.value;
      }
    })
  });
});

