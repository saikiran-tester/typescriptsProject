"use strict";
class employee {
    eid;
    ename;
    salary;
    role;
    accenture(eid, ename, salary, role) {
        this.eid = eid;
        this.ename = ename;
        this.salary = salary;
        this.role = role;
    }
    empDetail() {
        console.log(this.eid, this.ename, this.salary, this.role);
    }
}
let emp = new employee();
emp.accenture(11465, 'saikiran', 100000, 'software tester');
emp.empDetail();
class mobile {
    password;
    security(password) {
        this.password = password;
    }
    access() {
        console.log(this.password);
        console.log('Devices is Sucessfully Unlocked');
    }
}
let pass = new mobile();
pass.security('Sai1234');
pass.access();
class life {
    wish;
    constructor(wish) {
        this.wish = wish;
    }
    bless() {
        console.log(this.wish);
    }
}
let you = new life('Your get fullfilled with abudance');
you.bless();
