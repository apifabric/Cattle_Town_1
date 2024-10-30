import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AmusementPark-new',
  templateUrl: './AmusementPark-new.component.html',
  styleUrls: ['./AmusementPark-new.component.scss']
})
export class AmusementParkNewComponent {
  @ViewChild("AmusementParkForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}