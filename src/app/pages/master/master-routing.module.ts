import { NgModule } from '@angular/core';
import { MasterComponent } from './master.component';
import { RouterModule, Routes } from '@angular/router';
import { BidangStudiListComponent } from './bidang-studi/bidang-studi-list/bidang-studi-list.component';
import { GuruListComponent } from './guru/guru-list/guru-list.component';
import { KelasListComponent } from './kelas/kelas-list/kelas-list.component';
import { MuridListComponent } from './murid/murid-list/murid-list.component';
import { BidangStudiDetailComponent } from './bidang-studi/bidang-studi-detail/bidang-studi-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';

const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [
    {
      path: 'bidang-studi',
      component: BidangStudiListComponent,
    },
    {
      path: 'bidang-studi-detail',
      component: BidangStudiDetailComponent,
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
    {
      path: 'employee',
      component: EmployeeListComponent,
    },
    {
      path: 'employee-detail',
      component: EmployeeDetailComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }
