import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodStallHomeComponent } from './home/FoodStall-home.component';
import { FoodStallNewComponent } from './new/FoodStall-new.component';
import { FoodStallDetailComponent } from './detail/FoodStall-detail.component';

const routes: Routes = [
  {path: '', component: FoodStallHomeComponent},
  { path: 'new', component: FoodStallNewComponent },
  { path: ':id', component: FoodStallDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FoodStall-detail-permissions'
      }
    }
  },{
    path: ':food_stall_id/Ticket', loadChildren: () => import('../Ticket/Ticket.module').then(m => m.TicketModule),
    data: {
        oPermission: {
            permissionId: 'Ticket-detail-permissions'
        }
    }
}
];

export const FOODSTALL_MODULE_DECLARATIONS = [
    FoodStallHomeComponent,
    FoodStallNewComponent,
    FoodStallDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodStallRoutingModule { }