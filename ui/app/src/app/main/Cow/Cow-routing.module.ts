import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowHomeComponent } from './home/Cow-home.component';
import { CowNewComponent } from './new/Cow-new.component';
import { CowDetailComponent } from './detail/Cow-detail.component';

const routes: Routes = [
  {path: '', component: CowHomeComponent},
  { path: 'new', component: CowNewComponent },
  { path: ':id', component: CowDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Cow-detail-permissions'
      }
    }
  },{
    path: ':cow_id/CowRideParticipation', loadChildren: () => import('../CowRideParticipation/CowRideParticipation.module').then(m => m.CowRideParticipationModule),
    data: {
        oPermission: {
            permissionId: 'CowRideParticipation-detail-permissions'
        }
    }
},{
    path: ':cow_id/MedicalTreatment', loadChildren: () => import('../MedicalTreatment/MedicalTreatment.module').then(m => m.MedicalTreatmentModule),
    data: {
        oPermission: {
            permissionId: 'MedicalTreatment-detail-permissions'
        }
    }
}
];

export const COW_MODULE_DECLARATIONS = [
    CowHomeComponent,
    CowNewComponent,
    CowDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CowRoutingModule { }