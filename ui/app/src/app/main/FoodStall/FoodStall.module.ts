import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FOODSTALL_MODULE_DECLARATIONS, FoodStallRoutingModule} from  './FoodStall-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FoodStallRoutingModule
  ],
  declarations: FOODSTALL_MODULE_DECLARATIONS,
  exports: FOODSTALL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodStallModule { }