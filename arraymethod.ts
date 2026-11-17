let fruits:string[]=["apple","orange","grapes","pomogranets","bannana"];

let bikes:Array<string>=["yamaha","hero","honda","duo","activa","douk"];

let list:Array<string|number>=[100,"sai","sanjay",140,"vijay","sri",104];

let mixedData:any[]=[143,"vaish",true,null];

let actor:string[]=["rajini","kamal","vijay","ajith","suriya","dhanush","vikram","karthi"];

//1.push()- add single or multiple element to the array 

console.log(fruits);

fruits.push("mango");

console.log(fruits);

//2.pop() - remove the last element from the array
console.log(bikes);
let removedBike = bikes.pop();

console.log("removedBike:",removedBike);

console.log(bikes);

//3.shift()- remove the first element from the array

console.log(actor);

let removedActor = actor.shift();

console.log("removedActor:",removedActor);

console.log(actor);

//4.unshift()- add single or multiple element from the beginning of the array

console.log(actor);

actor.unshift("rajini");

console.log(actor);

//5.concat()- combines two or more arrays

console.log(list);

let listAdd:(string|number)[]=[118,"vaishnavi"]

let listData = list.concat(listAdd);

console.log(listData);

//6.slice()- extract section of array
// stating imdex start with zero
// ending index will be exclusive eq:3-1=2

let separateElement = list.slice(0,2);

console.log(separateElement);

//7.splice() - add/remove element from array from anywhere.

//ex1

let removedItem = bikes.splice(0,2);

console.log(removedItem);

//ex2

bikes.splice(0,0,"bicyle","bmw","rx100");

console.log(bikes);

//8. indexof()- find the index of the element if not founr it return -1

let saiIndex=list.indexOf("sai");

console.log("saiIndex:",saiIndex);

//9.includes() - checks if element present or not
let bikeFound= bikes.includes("yamaha");
console.log(bikeFound);

if(bikes.includes("rx100"))
{
    console.log("bike is found")
}
else
{
   console.log("bike not found")
}

//10 tostring() - convert array to string

let convertedFruit = fruits.toString();

console.log(convertedFruit);






