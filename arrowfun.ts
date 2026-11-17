//arrow function
// function with no paramter and return value

let stor = ():void =>
{
    console.log('Hello software tester');
}

stor();

//function with  paramter and return value

let ant = (a:string,b:string):string =>
{
    return a +" "+ b
}

console.log(ant('saikiran','vaishnavi'));


// function with restparameter

let life = (...num:number[]):number =>
{
    let i = 0;

    let total=0;

    for(i=0; i<num.length;i++)
    {
        total+=num[i]
    }

    console.log(`total value:${total}`);
}

life(14,18);


// function with restparameter with multitypes;

let count = (...rec:(number|string)[]):number =>
{
    return rec.length
}

console.log(`count : ${count('sk','vs','sk','tk',14,18)}`);

// function with optional parameter

let detail = (empId:any,empName:string,empMail?:any) =>
{
    let info= {empId:empId,
        empName:empName
    };
    if(empMail!==undefined)
    {
       info.empMail= empMail

    } 

    console.log(info);
}

detail('acc14158', 'saikiran S','sk@14.mail');


// function with default parameter

let logs = (id:any,eName:string,login:any='9am',logout:any) =>
{
    let loginfo = {
        id:id,
        eName:eName,
        login,
        logout:logout,
    };

    console.log(loginfo);
}

logs('sk14','saikiran',undefined,'6pm');

//Explicit return (with {})

let one = (s:number,v:number):number=> {return s+v};

console.log(one(14,18));

//Implicit return (short form)

let two = (vone:number,vtwo:number):number=> vone+vtwo;
console.log(two(15,16));

