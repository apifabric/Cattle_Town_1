import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PARKVISITOR_MODULE_DECLARATIONS, ParkVisitorRoutingModule} from  './ParkVisitor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ParkVisitorRoutingModule
  ],
  declarations: PARKVISITOR_MODULE_DECLARATIONS,
  exports: PARKVISITOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParkVisitorModule { }