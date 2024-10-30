import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GamblingAttraction-card.component.html',
  styleUrls: ['./GamblingAttraction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GamblingAttraction-card]': 'true'
  }
})

export class GamblingAttractionCardComponent {


}