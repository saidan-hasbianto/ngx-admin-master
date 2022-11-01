import { Component, OnInit } from '@angular/core';
import { MsBidangStudi } from '../../../../models/ms-bidang-studi';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bidang-studi-list',
  templateUrl: './bidang-studi-list.component.html',
  styleUrls: ['./bidang-studi-list.component.scss']
})

export class BidangStudiListComponent implements OnInit {
  objList: MsBidangStudi[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createFakeData("Matematika");
    this.createFakeData("Bahasa Indonesia");
    this.createFakeData("Olah Raga");
    this.createFakeData("Kesenian");
    this.createFakeData("Agama Islam");
    // localStorage.setItem("studiList", JSON.stringify(studiList));
    // newStudiList = JSON.parse(localStorage.getItem("studiList"));
  }

  createFakeData(bidang_studi: string) {
    let a = new MsBidangStudi();
    a.id = uuidv4();
    a.bidang_studi = bidang_studi;
    a.tahun_ajaran = 2022;
    this.objList.push(a);
  }

  btnClick(){
    console.log("disini");
    
    this.router.navigate(['./master/bidang-studi-detail']);
  }
}
