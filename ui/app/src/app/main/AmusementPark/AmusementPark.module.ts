import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {AMUSEMENTPARK_MODULE_DECLARATIONS, AmusementParkRoutingModule} from  './AmusementPark-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AmusementParkRoutingModule
  ],
  declarations: AMUSEMENTPARK_MODULE_DECLARATIONS,
  exports: AMUSEMENTPARK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AmusementParkModule { }