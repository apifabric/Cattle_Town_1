import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MedicalTreatment-card.component.html',
  styleUrls: ['./MedicalTreatment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MedicalTreatment-card]': 'true'
  }
})

export class MedicalTreatmentCardComponent {


}