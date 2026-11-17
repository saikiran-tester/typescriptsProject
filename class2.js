"use strict";
// my version
class employee {
    empId;
    empName;
    empMail;
    salary;
    role;
    pass;
    static company;
    constructor(empMail, pass, empId, empName, salary, role, company) {
        this.empId = empId;
        this.empName = empName;
        this.empMail = empMail;
        this.salary = salary;
        this.role = role;
        this.pass = pass;
        employee.company;
    }
    getempDetail() {
        console.log(`Helloo Emp Its me ${employee.company}`);
        console.log("Employees Access - Email and Pass Need? please provide!");
        if (this.empMail && this.pass) {
            console.log(`Employees Mail Id: ${this.empMail} `);
            console.log(`Employees Password : ${this.pass}`);
            console.log("Email and Pass word Successfully recevied and Access provided ");
            console.log("Personal Detail:-");
            console.log(`Emp ID : ${this.empId}`);
            console.log(`Emp Name : ${this.empName}`);
            console.log(`Emp Role : ${this.role}`);
            console.log(`Emp Salary : ${this.salary}`);
            console.log("Successfully Your Information Add to Server");
        }
        else if (this.empMail && this.pass === undefined) {
            console.log(`Employees Mail Id: ${this.empMail} `);
            console.log("Password is Missing so Unable to Add your data to server");
        }
        else if (this.pass && this.empMail === undefined) {
            console.log(`Employees Password : ${this.pass}`);
            console.log("Maild Id is Missing so Unable to Add your data to server");
        }
        else {
            console.log("Access not available so Unable to Add your data to server");
        }
    }
}
//let info = new employee("sk@14mail.com", "Sk@14","acc1145","saikiran",100000,"softwaretester")
//info.getempDetail();
let info2 = new employee("srimathika@125.mail.com", "sk@16", "acc1145", "Srimathika", 100000, "softwaretester");
info2.getempDetail();
console.log(info2.empId);
/*

type EmployeeData = {
    empId: string;
    empName: string;
    salary: number;
    role: string;
    empMail?: string;
    pass?: string;
};

class Employee {

    empId: string;
    empName: string;
    salary: number;
    role: string;
    empMail?: string;
    pass?: string;

    constructor(emp: EmployeeData) {

        this.empId = emp.empId;
        this.empName = emp.empName;
        this.salary = emp.salary;
        this.role = emp.role;
        this.empMail = emp.empMail;
        this.pass = emp.pass;
    }
getDetails() {

    if (!this.empMail || !this.pass) {
        console.log("❌ Login Failed");
        return;
    }

    console.log("✅ Login Successful");

    console.log(`ID : ${this.empId}`);
    console.log(`Name : ${this.empName}`);
    console.log(`Role : ${this.role}`);
    console.log(`Salary : ${this.salary}`);
}

}

let info = new Employee({
    empMail:"sk14@mail.com",
    
    empId: "1145",
    empName: "saikiran",
    salary: 100000,
    role: "Software testing"
})
info.getDetails();
*/ 
