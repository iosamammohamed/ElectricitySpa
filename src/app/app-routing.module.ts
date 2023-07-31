import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricityTimeListComponent } from './home/components/electricity-time-list/electricity-time-list.component';

const routes: Routes = [
  {
    path: '',
    component: ElectricityTimeListComponent

  },
      {
        path: '**',
        redirectTo: ''
      },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
