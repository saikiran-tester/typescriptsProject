
//array


let fruits:string[]=["apple","orange","grapes","pomogranets","bannana"];

//generic array

let bikes:Array<string>=["yamaha","hero","honda","duo","activa","douk"];

let list:Array<string|number>=[100,"sai","sanjay",140,"vijay","sri",104];

let mixedData:any[]=[143,"vaish",true,null];

let actor:string[]=["rajini","kamal","vijay","ajith","suriya","dhanush","vikram","karthi"];




//console.log(list[1]);



//array - for loop;

let res="";

for(let i=0;i<fruits.length;i++)
{
   res+= fruits[i]+" ";
}

console.log(res);

//for in loop;

for(let i in bikes)
{
 
    console.log(bikes[i]);
}

// for of loop

for(let value of list)
{
    console.log(value);
}

// push array into function

function checker(model:string, bikes:string[]):boolean
{
    for(let i=0; i<bikes.length; i++)
    {
        if(bikes[i]==model)
        {
            return true
        }
        
    }

    return false
}

console.log(checker('yamaha',bikes));

//function takes array and return array
let rev: string[] = [];

function capitalize(actor: string[]): string[] {
    for (let i = 0; i < actor.length; i++) {
        rev[i] = actor[i].toUpperCase();
    }

    return rev;
}

console.log(capitalize(actor));

//touple

let data:[number,string]=[143,"saikiran"]

let actress:[string,string,string,string,string]=["samantha","saipallavi","mrunaltakur","shreya","tamanna"];

let month:[string,number,string,number]=["jan",2,"mar",4];


//touple with for loop

/*for(let i=0;i<actress.length;i++)
{
    console.log(actress[i]);
}
*/
// touple with for in loop;
/*
for(let i in actress)
{
    console.log(actress[i]);
}
    */

for(let beauty of actress)
{
  console.log(beauty);
}

//touple array

let emp:[number,string][]=[[1011,"saikiran"],[1012,"vaishnavi"], [1013,"srimathika"]];

console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);