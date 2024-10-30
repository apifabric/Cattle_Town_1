import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CowRideParticipation-card.component.html',
  styleUrls: ['./CowRideParticipation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CowRideParticipation-card]': 'true'
  }
})

export class CowRideParticipationCardComponent {


}