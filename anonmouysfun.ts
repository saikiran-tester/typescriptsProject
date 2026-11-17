//anonmouys function
// function with no paramter and return value

let stor = function():void
{
    console.log('Hello software tester');
}

stor();

//function with  paramter and return value

let ant = function(a:string,b:string):string
{
    return a +" "+ b
}

console.log(ant('saikiran','vaishnavi'));


// function with restparameter

let life = function(...num:number[]):number
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

let count = function(...rec:(number|string)[]):number
{
    return rec.length
}

console.log(`count : ${count('sk','vs','sk','tk',14,18)}`);

// function with optional parameter

let detail = function(empId:any,empName:string,empMail?:any)
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

let logs = function(id:any,eName:string,login:any='9am',logout:any)
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

