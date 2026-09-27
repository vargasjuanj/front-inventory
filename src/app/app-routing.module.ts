import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashoard/dashboard-routing.module';


const routes: Routes = [
   {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashoard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
    )  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
