import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MedicalTreatment-new',
  templateUrl: './MedicalTreatment-new.component.html',
  styleUrls: ['./MedicalTreatment-new.component.scss']
})
export class MedicalTreatmentNewComponent {
  @ViewChild("MedicalTreatmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}