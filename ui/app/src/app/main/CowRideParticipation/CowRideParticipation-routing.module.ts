import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowRideParticipationHomeComponent } from './home/CowRideParticipation-home.component';
import { CowRideParticipationNewComponent } from './new/CowRideParticipation-new.component';
import { CowRideParticipationDetailComponent } from './detail/CowRideParticipation-detail.component';

const routes: Routes = [
  {path: '', component: CowRideParticipationHomeComponent},
  { path: 'new', component: CowRideParticipationNewComponent },
  { path: ':id', component: CowRideParticipationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CowRideParticipation-detail-permissions'
      }
    }
  }
];

export const COWRIDEPARTICIPATION_MODULE_DECLARATIONS = [
    CowRideParticipationHomeComponent,
    CowRideParticipationNewComponent,
    CowRideParticipationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CowRideParticipationRoutingModule { }