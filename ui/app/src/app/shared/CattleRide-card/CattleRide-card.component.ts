import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CattleRide-card.component.html',
  styleUrls: ['./CattleRide-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CattleRide-card]': 'true'
  }
})

export class CattleRideCardComponent {


}