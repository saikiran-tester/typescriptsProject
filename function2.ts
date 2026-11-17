//named function

// function with no parameter and no return value

function demo():void
{
    console.log('welcome genius sai')
}

demo();

// function with parameter and  return  value

function demo2(a:number,b:number):number
{
   console.log(a+b) 
}

demo2(14,18);

// function with restparameter
/*
function calculation(...num:number[]):number
{
    let i = 0;
    let sum:number=0;
    for(i=0; i<num.length;i++)
    {
        sum+=num[i];
    }

    console.log(`sum of num:${sum}`);
}
calculation(10,14);
*/

// function with restparameter with multitypes;

function calculation(...num:(number| string)[]):number
{
    return num.length;
}

console.log(calculation(14,18));
console.log(calculation('saikiran','vaishnavi','srimathika'));

// function with optional parameter

/*

function flow(work:string,spend:number,shours?:number,result:string)
{
    console.log(`work:${work}`)
    console.log(`spend:${spend}`)
    console.log(`result:${result}`)
    
}

flow('reading', 2, undefined, 'good');

*/
/*

// function with default parameter

function flow(work: string, spend: number, shours: number = 2, result: string) {
    console.log(`work: ${work}`);
    console.log(`spend: ${spend}`);
    console.log(`shours: ${shours}`);
    console.log(`result: ${result}`);
}

flow('reading', 2, undefined, 'good');
*/


