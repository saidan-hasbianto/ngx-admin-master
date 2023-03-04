import { Component, OnInit } from '@angular/core';
import { MsKelas } from '../../../../models/ms-kelas';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-kelas-list',
  templateUrl: './kelas-list.component.html',
  styleUrls: ['./kelas-list.component.scss']
})
export class KelasListComponent implements OnInit {
  objList: MsKelas[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createFakeData("1-A",31);
    this.createFakeData("1-B",30);
    this.createFakeData("1-C",29);
    this.createFakeData("1-D",28);
    this.createFakeData("1-E",30);
  }

  createFakeData(nama: string, jumlah_murid: number) {
    let a = new MsKelas();
    a.id = uuidv4();
    a.jumlah_murid = jumlah_murid;
    a.nama = nama;
    this.objList.push(a);
  }

  btnClick(){
    console.log("disini");
    
    this.router.navigate(['./master/kelas-detail']);
  }
}
