import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FoodStall-card.component.html',
  styleUrls: ['./FoodStall-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FoodStall-card]': 'true'
  }
})

export class FoodStallCardComponent {


}