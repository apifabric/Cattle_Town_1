import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Cow-card.component.html',
  styleUrls: ['./Cow-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Cow-card]': 'true'
  }
})

export class CowCardComponent {


}