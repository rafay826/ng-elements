import {Component, Input, HostListener, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'centrl-tooltip',
  template: `
    <div class="tooltip-container">
      <p>{{ text }}</p>
      <div #toolTip
           (mouseleave)="onMouseLeave()"
           class="tooltip">{{ text }}
      </div>
    </div>
  `,
  styleUrls: ['centrl-tooltip.component.scss']
})
export class CentrlTooltipComponent {
  @ViewChild('toolTip') toolTip: ElementRef;
  @Input() public text: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.toolTip.nativeElement.style.visibility = 'visible';
  }

  onMouseLeave() {
    this.toolTip.nativeElement.style.visibility = 'hidden';
  }
}
