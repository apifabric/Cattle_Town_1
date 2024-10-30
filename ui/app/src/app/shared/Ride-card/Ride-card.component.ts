import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Ride-card.component.html',
  styleUrls: ['./Ride-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Ride-card]': 'true'
  }
})

export class RideCardComponent {


}