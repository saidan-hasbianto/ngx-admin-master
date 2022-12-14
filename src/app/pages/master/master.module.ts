import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidangStudiDetailComponent } from './bidang-studi/bidang-studi-detail/bidang-studi-detail.component';
import { BidangStudiListComponent } from './bidang-studi/bidang-studi-list/bidang-studi-list.component';
import { GuruDetailComponent } from './guru/guru-detail/guru-detail.component';
import { GuruListComponent } from './guru/guru-list/guru-list.component';
import { KelasDetailComponent } from './kelas/kelas-detail/kelas-detail.component';
import { KelasListComponent } from './kelas/kelas-list/kelas-list.component';
import { MuridDetailComponent } from './murid/murid-detail/murid-detail.component';
import { MuridListComponent } from './murid/murid-list/murid-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { MasterRoutingModule } from './master-routing.module';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BidangStudiDetailComponent,
    BidangStudiListComponent,
    GuruDetailComponent,
    GuruListComponent,
    KelasDetailComponent,
    KelasListComponent,
    MuridDetailComponent,
    MuridListComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    MasterRoutingModule,
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ]
})
export class MasterModule { }
