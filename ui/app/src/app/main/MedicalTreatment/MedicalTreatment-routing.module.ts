import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalTreatmentHomeComponent } from './home/MedicalTreatment-home.component';
import { MedicalTreatmentNewComponent } from './new/MedicalTreatment-new.component';
import { MedicalTreatmentDetailComponent } from './detail/MedicalTreatment-detail.component';

const routes: Routes = [
  {path: '', component: MedicalTreatmentHomeComponent},
  { path: 'new', component: MedicalTreatmentNewComponent },
  { path: ':id', component: MedicalTreatmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MedicalTreatment-detail-permissions'
      }
    }
  }
];

export const MEDICALTREATMENT_MODULE_DECLARATIONS = [
    MedicalTreatmentHomeComponent,
    MedicalTreatmentNewComponent,
    MedicalTreatmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalTreatmentRoutingModule { }