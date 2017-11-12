import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { DogNewComponent } from './dog/dog-new/dog-new.component';
const routes: Routes = [
    {
        path: 'map',
        component: MapComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '',
        component: LoginComponent
    },
    {
      path: '',
      component: DogNewComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
