import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkVisitorHomeComponent } from './home/ParkVisitor-home.component';
import { ParkVisitorNewComponent } from './new/ParkVisitor-new.component';
import { ParkVisitorDetailComponent } from './detail/ParkVisitor-detail.component';

const routes: Routes = [
  {path: '', component: ParkVisitorHomeComponent},
  { path: 'new', component: ParkVisitorNewComponent },
  { path: ':id', component: ParkVisitorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ParkVisitor-detail-permissions'
      }
    }
  },{
    path: ':visitor_id/Purchase', loadChildren: () => import('../Purchase/Purchase.module').then(m => m.PurchaseModule),
    data: {
        oPermission: {
            permissionId: 'Purchase-detail-permissions'
        }
    }
},{
    path: ':visitor_id/Ticket', loadChildren: () => import('../Ticket/Ticket.module').then(m => m.TicketModule),
    data: {
        oPermission: {
            permissionId: 'Ticket-detail-permissions'
        }
    }
}
];

export const PARKVISITOR_MODULE_DECLARATIONS = [
    ParkVisitorHomeComponent,
    ParkVisitorNewComponent,
    ParkVisitorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkVisitorRoutingModule { }