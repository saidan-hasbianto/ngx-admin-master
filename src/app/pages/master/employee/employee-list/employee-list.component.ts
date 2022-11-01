import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Employee } from '../../../../models/employee';

@Component({
  selector: 'ngx-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  // source: LocalDataSource = new LocalDataSource();
  objList: Employee[] = [];

  constructor() {
    // let a = new Employee();
    // a.id = "d5024df9-fee1-497d-9c7d-b56a43cc18a6";
    // a.basicSalary = 4300000;
    // a.birthDate = new Date('1988-01-27');
    // a.description = "tester1";
    // a.email = "tester1@nanana.com";
    // a.firstName = "tester1";
    // a.group = "test";
    // a.lastName = "staff";
    // a.status = "test";
    // a.username = "tester1";
    // let employeeList = [];
    // employeeList.push(a);
    // a = new Employee();
    // a.id = "f1465bca-38b3-471d-b796-a73985dfb706";
    // a.basicSalary = 5000000;
    // a.birthDate = new Date('1988-01-27');
    // a.description = "tester2";
    // a.email = "tester2@nanana.com";
    // a.firstName = "tester2";
    // a.group = "tester2";
    // a.lastName = "staff";
    // a.status = "tester2";
    // a.username = "tester2";
    // employeeList.push(a);

    // console.log(employeeList);

    // const data = this.service.getData();
    // this.source.load(data);
    // const data = employeeList;
    // this.source.load(data);
  }

  ngOnInit(): void {
    this.createFakeData();

    // console.log(localStorage.getItem("employeeList"));
    // console.log(localStorage);

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  createFakeData() {
    let a = new Employee();
    a.id = "d5024df9-fee1-497d-9c7d-b56a43cc18a6";
    a.basicSalary = 4300000;
    a.birthDate = new Date('1988-01-27');
    a.description = "tester1";
    a.email = "tester1@nanana.com";
    a.firstName = "tester1";
    a.group = "test";
    a.lastName = "staff";
    a.status = "test";
    a.username = "tester1";
    this.objList.push(a);

    // a = new Employee();
    a.id = "f1465bca-38b3-471d-b796-a73985dfb706";
    a.basicSalary = 5000000;
    a.birthDate = new Date('1988-01-27');
    a.description = "tester2";
    a.email = "tester2@nanana.com";
    a.firstName = "tester2";
    a.group = "tester2";
    a.lastName = "staff";
    a.status = "tester2";
    a.username = "tester2";
    this.objList.push(a);


    // localStorage.setItem("employeeList", JSON.stringify(employeeList));


  }

  btnClick() {

  }
}
