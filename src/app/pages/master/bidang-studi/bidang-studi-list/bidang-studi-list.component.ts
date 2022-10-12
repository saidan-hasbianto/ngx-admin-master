import { Component, OnInit } from '@angular/core';
import { MsBidangStudi } from '../../../../models/ms-bidang-studi';

@Component({
  selector: 'ngx-bidang-studi-list',
  templateUrl: './bidang-studi-list.component.html',
  styleUrls: ['./bidang-studi-list.component.scss']
})

export class BidangStudiListComponent implements OnInit {
  studiList: MsBidangStudi[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createFakeData("Matematika");
    this.createFakeData("Bahasa Indonesia");
    this.createFakeData("Olah Raga");
    this.createFakeData("Kesenian");
    this.createFakeData("Agama Islam");
    // localStorage.setItem("studiList", JSON.stringify(studiList));
    // newStudiList = JSON.parse(localStorage.getItem("studiList"));
    console.log(this.studiList);

  }

  createFakeData(bidang_studi: string) {
    let a = new MsBidangStudi();
    a.id = Math.random().toString();
    a.bidang_studi = bidang_studi;
    a.tahun_ajaran = 2022;
    this.studiList.push(a);
  }

}
