import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CowRideParticipation-new',
  templateUrl: './CowRideParticipation-new.component.html',
  styleUrls: ['./CowRideParticipation-new.component.scss']
})
export class CowRideParticipationNewComponent {
  @ViewChild("CowRideParticipationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}