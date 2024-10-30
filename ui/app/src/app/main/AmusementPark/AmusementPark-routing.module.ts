import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmusementParkHomeComponent } from './home/AmusementPark-home.component';
import { AmusementParkNewComponent } from './new/AmusementPark-new.component';
import { AmusementParkDetailComponent } from './detail/AmusementPark-detail.component';

const routes: Routes = [
  {path: '', component: AmusementParkHomeComponent},
  { path: 'new', component: AmusementParkNewComponent },
  { path: ':id', component: AmusementParkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AmusementPark-detail-permissions'
      }
    }
  },{
    path: ':park_id/CattleRide', loadChildren: () => import('../CattleRide/CattleRide.module').then(m => m.CattleRideModule),
    data: {
        oPermission: {
            permissionId: 'CattleRide-detail-permissions'
        }
    }
},{
    path: ':park_id/FoodStall', loadChildren: () => import('../FoodStall/FoodStall.module').then(m => m.FoodStallModule),
    data: {
        oPermission: {
            permissionId: 'FoodStall-detail-permissions'
        }
    }
},{
    path: ':park_id/GamblingAttraction', loadChildren: () => import('../GamblingAttraction/GamblingAttraction.module').then(m => m.GamblingAttractionModule),
    data: {
        oPermission: {
            permissionId: 'GamblingAttraction-detail-permissions'
        }
    }
},{
    path: ':park_id/Ride', loadChildren: () => import('../Ride/Ride.module').then(m => m.RideModule),
    data: {
        oPermission: {
            permissionId: 'Ride-detail-permissions'
        }
    }
},{
    path: ':park_id/Staff', loadChildren: () => import('../Staff/Staff.module').then(m => m.StaffModule),
    data: {
        oPermission: {
            permissionId: 'Staff-detail-permissions'
        }
    }
}
];

export const AMUSEMENTPARK_MODULE_DECLARATIONS = [
    AmusementParkHomeComponent,
    AmusementParkNewComponent,
    AmusementParkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmusementParkRoutingModule { }