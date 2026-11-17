//name function without paramter and type
function mail(){
    console.log('Congratulations Of Your employment in accenture');
}

mail();

//name function with paramter and type

function love(a:string,b:string):string
{
    return a+b;
}

console.log(love('saikiran', ' vaishnavi'));

//function expression and anonmous function without paramter and type
let msg = function()
{
    console.log('As per your wish you get every goodthings');
}

msg();

//function expression and anonmous function with paramter and type

let sum = function(x:number,y:number):number
{
    return x+y;
}

console.log(sum(14,18));

// default parameter and optinal parameter

let sent = function(wish:string,festival?:string):string
{
    return wish +" "+festival;
}

console.log(sent('Many more happy','birthday'));
console.log(sent("birthday"));

//function overloading
function add(c:string,d:string):string
function add(c:number,d:number):number

function add(c:any,d:any):any
{
    return c+d;

}

console.log(add(14,18));

//rest parameter

function call(miss1:string,...miss2:string[]):string
{
    return miss1+" "+miss2.join(", ")
}

console.log(call('dad','mom','sis'));

let word :string = () => console.log('we living in happy days');

let peace : any = (u,m) => u+m ;

console.log(peace('mind',' patient'));

