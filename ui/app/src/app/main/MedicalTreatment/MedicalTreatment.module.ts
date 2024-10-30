import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MEDICALTREATMENT_MODULE_DECLARATIONS, MedicalTreatmentRoutingModule} from  './MedicalTreatment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MedicalTreatmentRoutingModule
  ],
  declarations: MEDICALTREATMENT_MODULE_DECLARATIONS,
  exports: MEDICALTREATMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicalTreatmentModule { }