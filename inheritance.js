"use strict";
class person {
    name;
    personDetail(name) {
        this.name = name;
        console.log(`My name is ${this.name}`);
    }
}
class job extends person {
    company;
    role;
    empDetail(name, company, role) {
        this.name = name;
        this.company = company;
        this.role = role;
        console.log(`I am ${this.name} working at${this.company} as a ${this.role}`);
    }
}
class life extends person {
    partnerName;
    Financial;
    love(partnerName, Financial) {
        this.partnerName = partnerName;
        this.Financial = Financial;
        console.log(`My Partner name is ${this.partnerName} and I am Financial status ${this.Financial}`);
    }
}
let phase1 = new job();
phase1.empDetail('Saikiran', ' Accenture', 'software tester');
phase1.personDetail('saikiran');
let phase2 = new life();
phase2.love('Vaishnavi', 'Very Well');
