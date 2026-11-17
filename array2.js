"use strict";
//array
let fruits = ["apple", "orange", "grapes", "pomogranets", "bannana"];
//generic array
let bikes = ["yamaha", "hero", "honda", "duo", "activa", "douk"];
let list = [100, "sai", "sanjay", 140, "vijay", "sri", 104];
let mixedData = [143, "vaish", true, null];
let actor = ["rajini", "kamal", "vijay", "ajith", "suriya", "dhanush", "vikram", "karthi"];
//console.log(list[1]);
//array - for loop;
let res = "";
for (let i = 0; i < fruits.length; i++) {
    res += fruits[i] + " ";
}
console.log(res);
//for in loop;
for (let i in bikes) {
    console.log(bikes[i]);
}
// for of loop
for (let value of list) {
    console.log(value);
}
// push array into function
function checker(model, bikes) {
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i] == model) {
            return true;
        }
    }
    return false;
}
console.log(checker('yamaha', bikes));
//function takes array and return array
let rev = [];
function capitalize(actor) {
    for (let i = 0; i < actor.length; i++) {
        rev[i] = actor[i].toUpperCase();
    }
    return rev;
}
console.log(capitalize(actor));
//touple
let data = [143, "saikiran"];
let actress = ["samantha", "saipallavi", "mrunaltakur", "shreya", "tamanna"];
let month = ["jan", 2, "mar", 4];
//touple with for loop
/*for(let i=0;i<actress.length;i++)
{
    console.log(actress[i]);
}
*/
// touple with for in loop;
for (let i in actress) {
    console.log(actress[i]);
}
