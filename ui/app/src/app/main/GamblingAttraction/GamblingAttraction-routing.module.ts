import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamblingAttractionHomeComponent } from './home/GamblingAttraction-home.component';
import { GamblingAttractionNewComponent } from './new/GamblingAttraction-new.component';
import { GamblingAttractionDetailComponent } from './detail/GamblingAttraction-detail.component';

const routes: Routes = [
  {path: '', component: GamblingAttractionHomeComponent},
  { path: 'new', component: GamblingAttractionNewComponent },
  { path: ':id', component: GamblingAttractionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GamblingAttraction-detail-permissions'
      }
    }
  }
];

export const GAMBLINGATTRACTION_MODULE_DECLARATIONS = [
    GamblingAttractionHomeComponent,
    GamblingAttractionNewComponent,
    GamblingAttractionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamblingAttractionRoutingModule { }