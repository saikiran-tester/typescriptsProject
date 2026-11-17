//callback function
/*
function act(msg:string)
{
 console.log(msg)
}

function actMain(tip:string,callback:(msg:string)=>void)
{
    console.log(tip)
    callback('welcome')
    
}
actMain('water is good enough', act)
*/

/*


function result(resultMsg:string)
{
    console.log(resultMsg)
}

function portalAccess(mail:string,callback:(resultMsg:string)=>void)
{
    console.log(mail);
    callback('Congratulations of your employment as software tester role')
}

portalAccess('got mail from Accenture', result);
*/



function things(open:string)
{
    console.log(open)
}

function bag(zip:string,callback:(open:string)=>void)
{
    console.log(zip);
    callback('take a pen from bag')
}

bag('unzip the bag', things);


//function overloading

//function with different type of parameter
/*
function emp(id:number):string
function emp(ename:string):string

function emp(value:(number|string)):string
{
    if(typeof value ==="Number")
    {
        return "empid:"+ value;
    }

    else
    {
        return "name:"+value;
    }
}


console.log(emp('saikiran'));
*/
/*

////function with different number of parameter

function add(a:number,b:number):number
function add(a:number,b:number,c:number):number

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c
    }

    return a+b
}

console.log(add(14,18));
console.log(add(14,18,16));
*/
////function with different type of return type

function contact(num:number):number
function contact(num:string):string

function contact(num:(number|string)): number|string
{
    if(typeof num==='string')
    {
        return  num 
    }

    else if(typeof num ==='number')
    {
        return num
    }   
}

console.log(contact(9500491623))
console.log(contact('Saikiran:9500491623'))