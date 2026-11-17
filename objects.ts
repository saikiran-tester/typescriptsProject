// Different ways to create an oject in JS/TS //
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS) -pending



// 1. using 'object' type - Directly define the values for variable (JS/TS)

let personalDetail = {Pname:"saikiran", age:26, city:"erode", phnum:9500491623,
    getDetail:function(){
        return `I am ${this.Pname} and age of ${this.age} and lived at ${this.city} then if you want to contact me call this number ${this.phnum}.`;
    }
};

console.log(personalDetail.Pname);
console.log(personalDetail.city);
console.log(personalDetail.getDetail());

//2. Inline Type Object - We also define the datatype of the keys (TS)

let student : {
    sname:string;
    std:number;
    school:string;
    getSdetail():string
}=
{
    sname:"saikiran",
    std:10,
    school:"msshss",
    getSdetail:function()
    {
        return `i am ${this.sname} and studying ${this.std} std and school of ${this.school}.`
    }

}

console.log(student.sname);
console.log(student.getSdetail());

// 3. Using type aliases (JS/TS)

type employee = {
    ename : string;
    role  : string;
    salary:number;
    company:string;
    getEdetail:()=>string;
}

let enquiry1 :employee={
    ename:"saikiran",
    role:"software tester",
    salary:100000,
    company:"Accenture",
    getEdetail:function()
    {
        return `I am ${this.ename} working at ${this.company} as a  ${this.role} with a salary of Rs${this.salary} per month.`
    }

}

let enquiry2 :employee={
    ename:"Srimathika",
    role:"software tester",
    salary:100000,
    company:"Accenture",
    getEdetail:function()
    {
        return `I am ${this.ename} working at ${this.company} as a  ${this.role} with a salary of Rs${this.salary} per month.`
    }

}



let enquiry3 :employee={
    ename:"Vaishnavi",
    role:"Development",
    salary:100000,
    company:"Accenture",
    getEdetail:function()
    {
        return `I am ${this.ename} working at ${this.company} as a  ${this.role} with a salary of  Rs${this.salary} per month.`
    }

}

console.log(enquiry1.getEdetail());
console.log(enquiry2.getEdetail());
console.log(enquiry3.getEdetail());
