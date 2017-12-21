import { Component, Input } from '@angular/core';

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
export class CentrlTooltipComponent {
  @Input() public text: string;
}
