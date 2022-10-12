import { NgModule } from '@angular/core';
import { MasterComponent } from './master.component';
import { RouterModule, Routes } from '@angular/router';
import { BidangStudiListComponent } from './bidang-studi/bidang-studi-list/bidang-studi-list.component';
import { GuruListComponent } from './guru/guru-list/guru-list.component';
import { KelasListComponent } from './kelas/kelas-list/kelas-list.component';
import { MuridListComponent } from './murid/murid-list/murid-list.component';

const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [
    {
      path: 'bidang-studi',
      component: BidangStudiListComponent,
    },
    {
      path: 'guru',
      component: GuruListComponent,
    },
    {
      path: 'kelas',
      component: KelasListComponent,
    },
    {
      path: 'murid',
      component: MuridListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }
