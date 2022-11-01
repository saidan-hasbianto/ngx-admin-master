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
import { NbButtonModule, NbCardModule } from '@nebular/theme';



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

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    MasterRoutingModule, 
    NbCardModule,
    NbButtonModule,

  ]
})
export class MasterModule { }
