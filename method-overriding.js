"use strict";
class Saikiran {
    schoolName1;
    school(schoolName1) {
        this.schoolName1 = schoolName1;
        console.log(`My School name is ${this.schoolName1}`);
    }
}
class Vaishnavi extends Saikiran {
    schoolName2;
    school(schoolName1, schoolName2) {
        super.school(schoolName1);
        this.schoolName2 = schoolName2;
        console.log(`My School name is ${this.schoolName2}`);
    }
}
let edu = new Vaishnavi();
edu.school("Msshss", 'Govt hr sec school');
