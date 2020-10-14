import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'brand-button',
  templateUrl: './brand-button.component.html',
  styleUrls: ['./brand-button.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BrandButtonComponent implements OnInit {
  @Input('icon') iconName: IconDefinition;
  constructor() { }

  ngOnInit(): void {
  }

}
