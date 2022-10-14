import { Component, OnInit } from '@angular/core';
import { MsMurid } from '../../../../models/ms-murid';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'ngx-murid-list',
  templateUrl: './murid-list.component.html',
  styleUrls: ['./murid-list.component.scss']
})
export class MuridListComponent implements OnInit {
  objList: MsMurid[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createFakeData(nama: string, kelas: string, alamat: string) {
    let a = new MsMurid();
    a.id = uuidv4();
    a.kelas = kelas;
    a.nama = nama;
    a.alamat = alamat;
    this.objList.push(a);
  }
}
