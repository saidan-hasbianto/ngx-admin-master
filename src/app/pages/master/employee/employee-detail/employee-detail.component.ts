import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  objList: Employee[] = [];

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    // let myparse = JSON.parse(localStorage.getItem("employeeList"));
    JSON.parse(localStorage.getItem("employeeList")).forEach(element => {
      this.objList.push(element);
  });
}

  onClickSubmit(data) {


    // console.log(localStorage.getItem("employeeList"));
    // alert("Entered Email id : " + data.fname);
    let a = new Employee();
    a.id = "c34ba01d-f9bb-4d7e-bfe3-5ae3557eb679";
    a.basicSalary = data.fname;
    a.birthDate = new Date(data.fname);
    a.description = data.fname;
    a.email = data.fname;
    a.firstName = data.fname;
    a.group = data.fname;
    a.lastName = data.fname;
    a.status = data.fname;
    a.username = data.fname;
    this.objList.push(a);
    // console.log(JSON.stringify(this.objList));

    // localStorage.setItem("employeeList", JSON.stringify(this.objList));
    this.router.navigateByUrl('/pages/master/employee');

  }
  btnClick= function () {
    this.router.navigateByUrl('/pages/master/employee');

};
}
