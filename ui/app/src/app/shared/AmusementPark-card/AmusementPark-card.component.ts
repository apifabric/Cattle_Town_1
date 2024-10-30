import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AmusementPark-card.component.html',
  styleUrls: ['./AmusementPark-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AmusementPark-card]': 'true'
  }
})

export class AmusementParkCardComponent {


}