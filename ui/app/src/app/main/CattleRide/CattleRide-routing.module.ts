import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattleRideHomeComponent } from './home/CattleRide-home.component';
import { CattleRideNewComponent } from './new/CattleRide-new.component';
import { CattleRideDetailComponent } from './detail/CattleRide-detail.component';

const routes: Routes = [
  {path: '', component: CattleRideHomeComponent},
  { path: 'new', component: CattleRideNewComponent },
  { path: ':id', component: CattleRideDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CattleRide-detail-permissions'
      }
    }
  },{
    path: ':cattle_ride_id/CowRideParticipation', loadChildren: () => import('../CowRideParticipation/CowRideParticipation.module').then(m => m.CowRideParticipationModule),
    data: {
        oPermission: {
            permissionId: 'CowRideParticipation-detail-permissions'
        }
    }
},{
    path: ':cattle_ride_id/Ticket', loadChildren: () => import('../Ticket/Ticket.module').then(m => m.TicketModule),
    data: {
        oPermission: {
            permissionId: 'Ticket-detail-permissions'
        }
    }
}
];

export const CATTLERIDE_MODULE_DECLARATIONS = [
    CattleRideHomeComponent,
    CattleRideNewComponent,
    CattleRideDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CattleRideRoutingModule { }