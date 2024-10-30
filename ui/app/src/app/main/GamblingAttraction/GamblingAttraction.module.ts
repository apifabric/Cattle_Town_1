import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GAMBLINGATTRACTION_MODULE_DECLARATIONS, GamblingAttractionRoutingModule} from  './GamblingAttraction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GamblingAttractionRoutingModule
  ],
  declarations: GAMBLINGATTRACTION_MODULE_DECLARATIONS,
  exports: GAMBLINGATTRACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GamblingAttractionModule { }