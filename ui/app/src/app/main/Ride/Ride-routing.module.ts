import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RideHomeComponent } from './home/Ride-home.component';
import { RideNewComponent } from './new/Ride-new.component';
import { RideDetailComponent } from './detail/Ride-detail.component';

const routes: Routes = [
  {path: '', component: RideHomeComponent},
  { path: 'new', component: RideNewComponent },
  { path: ':id', component: RideDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Ride-detail-permissions'
      }
    }
  },{
    path: ':ride_id/Ticket', loadChildren: () => import('../Ticket/Ticket.module').then(m => m.TicketModule),
    data: {
        oPermission: {
            permissionId: 'Ticket-detail-permissions'
        }
    }
}
];

export const RIDE_MODULE_DECLARATIONS = [
    RideHomeComponent,
    RideNewComponent,
    RideDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RideRoutingModule { }