import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'AmusementPark', loadChildren: () => import('./AmusementPark/AmusementPark.module').then(m => m.AmusementParkModule) },
    
        { path: 'CattleRide', loadChildren: () => import('./CattleRide/CattleRide.module').then(m => m.CattleRideModule) },
    
        { path: 'Cow', loadChildren: () => import('./Cow/Cow.module').then(m => m.CowModule) },
    
        { path: 'CowRideParticipation', loadChildren: () => import('./CowRideParticipation/CowRideParticipation.module').then(m => m.CowRideParticipationModule) },
    
        { path: 'FoodStall', loadChildren: () => import('./FoodStall/FoodStall.module').then(m => m.FoodStallModule) },
    
        { path: 'GamblingAttraction', loadChildren: () => import('./GamblingAttraction/GamblingAttraction.module').then(m => m.GamblingAttractionModule) },
    
        { path: 'MedicalTreatment', loadChildren: () => import('./MedicalTreatment/MedicalTreatment.module').then(m => m.MedicalTreatmentModule) },
    
        { path: 'ParkVisitor', loadChildren: () => import('./ParkVisitor/ParkVisitor.module').then(m => m.ParkVisitorModule) },
    
        { path: 'Purchase', loadChildren: () => import('./Purchase/Purchase.module').then(m => m.PurchaseModule) },
    
        { path: 'Ride', loadChildren: () => import('./Ride/Ride.module').then(m => m.RideModule) },
    
        { path: 'Staff', loadChildren: () => import('./Staff/Staff.module').then(m => m.StaffModule) },
    
        { path: 'Ticket', loadChildren: () => import('./Ticket/Ticket.module').then(m => m.TicketModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }