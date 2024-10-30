import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CATTLERIDE_MODULE_DECLARATIONS, CattleRideRoutingModule} from  './CattleRide-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CattleRideRoutingModule
  ],
  declarations: CATTLERIDE_MODULE_DECLARATIONS,
  exports: CATTLERIDE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CattleRideModule { }