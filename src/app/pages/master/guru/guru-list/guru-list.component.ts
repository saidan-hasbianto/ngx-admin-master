import { Component, OnInit } from '@angular/core';
import { MsGuru } from '../../../../models/ms-guru';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'ngx-guru-list',
  templateUrl: './guru-list.component.html',
  styleUrls: ['./guru-list.component.scss']
})
export class GuruListComponent implements OnInit {
  objList: MsGuru[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createFakeData("Matematika","Depok","Guru 1","08989999");
    this.createFakeData("Bahasa Indonesia","Bogor","Guru 2","08140392832");
    this.createFakeData("Olah Raga","Jakarta","Guru 3","09829302112");
    this.createFakeData("Kesenian","Tangerang","Guru 4","0798762124");
    this.createFakeData("Agama Islam","Banten","Guru 5","0329837721");
  }

  createFakeData(bidang_studi: string, alamat: string, nama: string, tlp: string) {
    let a = new MsGuru();
    a.id = uuidv4();
    a.bidang_studi = bidang_studi;
    a.alamat = alamat;
    a.nama = nama;
    a.tlp = tlp;
    this.objList.push(a);
  }
}
