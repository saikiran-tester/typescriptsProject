let fruits:string[]=["apple","orange","grapes","pomogranets","bannana"];

let bikes:Array<string>=["yamaha","hero","honda","duo","activa","douk"];

let list:Array<string|number>=[100,"sai","sanjay",140,"vijay","sri",104];

let mixedData:any[]=[143,"vaish",true,null];

let num:number[]=[1,2,3,4,5,6,7,8,9,-1,-2,-3,-4];

let actor:string[]=["rajini","kamal","vijay","ajith","suriya","dhanush","vikram","karthi"];

//1.foreach

fruits.forEach((element:string,index:number)=>{
 console.log(element,index);
})

fruits.forEach((value:string)=>
{
    console.log(value.toUpperCase());
})
//2.map()

let doubledValue = num.map((digit:number)=>{
 return digit*digit;
})

console.log(doubledValue);


//3.filter()
let postiveValue = num.filter((value1:number)=>
{
    return value1>0;
})

console.log(postiveValue);

let negativeValue =num.filter((value2:number)=>
{
   return value2<0;
})
console.log(negativeValue);

//4.reduce

let totalValue = num.reduce((total:number,cvalue:number)=>
{
    return total+=cvalue;

})
console.log("total value:", totalValue);

//5.some()

let enquiry = bikes.some((check:string)=>check==="yamaha")
console.log("yamaha bike present:",enquiry)
console.log(bikes);

//6.some()

let isgreaterThanOne = num.every((element:number)=> element>1
)

console.log("its greater than one:",isgreaterThanOne);
