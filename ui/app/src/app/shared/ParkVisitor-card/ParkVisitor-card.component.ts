import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ParkVisitor-card.component.html',
  styleUrls: ['./ParkVisitor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ParkVisitor-card]': 'true'
  }
})

export class ParkVisitorCardComponent {


}