class Saikiran {
    schoolName1!: string;

    school(schoolName1: string) {
        this.schoolName1 = schoolName1;
        console.log(`My School name is ${this.schoolName1}`);
    }
}

class Vaishnavi extends Saikiran {

    schoolName2!: string;
    school(schoolName1: string,schoolName2: string) {
        super.school(schoolName1);
        this.schoolName2=schoolName2;
        console.log(`My School name is ${this.schoolName2}`);
    }
}

let edu = new Vaishnavi();
edu.school("Msshss",'Govt hr sec school');