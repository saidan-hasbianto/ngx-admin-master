import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MsKelas } from '../../../../models/ms-kelas';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';


@Component({
  selector: 'ngx-kelas-list',
  templateUrl: './kelas-list.component.html',
  styleUrls: ['./kelas-list.component.scss']
})
export class KelasListComponent implements OnInit {
  objList: MsKelas[] = [];
  selectedItem = '0';

  constructor(
    private router: Router,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.createFakeData("1-A", 31);
    this.createFakeData("1-B", 30);
    this.createFakeData("1-C", 29);
    this.createFakeData("1-D", 28);
    this.createFakeData("1-E", 30);
    this.createFakeData("2-A", 31);
    this.createFakeData("2-B", 30);
    this.createFakeData("2-C", 29);
    this.createFakeData("2-D", 28);
    this.createFakeData("2-E", 30);

  }

  createFakeData(nama: string, jumlah_murid: number) {
    let a = new MsKelas();
    a.id = uuidv4();
    a.jumlah_murid = jumlah_murid;
    a.nama = nama;
    this.objList.push(a);
  }

  btnClick() {
    this.router.navigate(['./pages/master/kelas-detail']);
  }

  filterKelas(event) {
      this.objList = [];
    if (event == "0") {
      this.objList = [];
      this.ngOnInit()
    } else {
      this.ngOnInit();
      let kelas = event;
      let tempArray = this.objList.filter(s => s.nama.includes(event));
      // this.changeDetection.detectChanges();
      this.objList = [];
      this.objList = tempArray;
      console.log(this.objList);
    }
  }

  public trackItem(index: number, item: MsKelas) {
    return item.id;
  }
}
