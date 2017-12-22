import {Component, Input} from '@angular/core';

@Component({
  selector: 'centrl-tooltip',
  template: `
    <div class="tooltip-container">
      <div class="text">
        <p>{{ text }}</p>
        <div class="tooltip">{{ text }}</div>
      </div>
    </div>
  `,
  styleUrls: ['centrl-tooltip.component.scss']
})
export class CentrlTooltipComponent {
  @Input() public text: string;
}
