import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworthDashboardComponent } from './modules/nw-calculator/networth-dashboard/networth-dashboard.component';

const routes: Routes = [
  { path: '', component: NetworthDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
