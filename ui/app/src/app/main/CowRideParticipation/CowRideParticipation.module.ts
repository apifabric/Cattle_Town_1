import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COWRIDEPARTICIPATION_MODULE_DECLARATIONS, CowRideParticipationRoutingModule} from  './CowRideParticipation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CowRideParticipationRoutingModule
  ],
  declarations: COWRIDEPARTICIPATION_MODULE_DECLARATIONS,
  exports: COWRIDEPARTICIPATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CowRideParticipationModule { }