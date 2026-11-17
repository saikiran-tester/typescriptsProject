//while
//Print numbers from 1 to 10 using a while loop.
/*
let i:number=1;
while(i<=10)
{
    console.log(i);
    i++;
}
    */
//Print all even numbers from 2 to 20 using a while loop.
/*
let i:number=2;

while(i<=20)
{
    console.log(i);
    i+=2;
}
    */

//Find the sum of numbers from 1 to 100 using a while loop.
/*
let i=1;

while(i<=100)
{
    console.log(i);
    i++;
}
    */

//Print the multiplication table of 7 using a while loop.
/*
let i = 1;

let num=7

while(i<=10)
{
    console.log(`${num}x${i}=${i*num}`);
    i++;
}
    */

//do while

//Print numbers from 1 to 10 using a do...while loop.
/*
let i=1;

do
{
    console.log(i)
    i++;
}while(i<=10);
*/

//Print all odd numbers from 1 to 25.
/*
let i = 1;

do
{
    console.log(i)
    i+=2;
}while(i<=25);
*/
//Print the multiplication table of 9 using a do...while loop
/*
let i =1;

let num=9

do
{
    console.log(`${i*num}`);
    i++;
}while(i<=10)
*/
//Find the sum of numbers from 50 to 100.
/*
let i = 50;

do
{
    console.log(i);
    i++;
}while(i<=100);
*/
//Count backwards from 20 to 1.
/*
let i = 20;

do
{
    console.log(i);
    i--;
}while(i>=1);
*/

//for loop

//Print numbers from 1 to 50.
/*

for(let i =1; i<=50;i++)
{
    console.log(i)
}
    */

//Print the square of numbers from 1 to 10.
/*
for(let i = 1; i<=10;i++)
{
    console.log(`square of numbers ${i}= ${i*i}`);
}
    */

//Print all numbers divisible by 5 between 1 and 100
/*
for(let i=1; i<=100;i++)
{
    if(i%5==0)
    {
        console.log(i)
    }
}
    */
//Count how many numbers between 1 and 100 are divisible by 3.
/*
let Count=0;

for(let i=1; i<=100;i++)
{
    if(i%3==0)
    {
        Count++;
    }
}

console.log(`count=${Count}`);
*/

//Find the factorial of 6.
//6! = 6*5*4*3*2*1
/*
let num=6;
let factorial=1;
for(let i=1; i<=num; i++)
{
 factorial=factorial*i   
}

console.log(factorial);
*/

//break

//Print numbers from 1 to 20, but stop when the number becomes 11.
/*
let i =1;
while(i<=20)
{
    if(i==11)
    {
        break;
    }

    console.log(i)
    i++;

}
    */
//Print numbers from 1 to 100, but stop when you find the first number divisible by 17.
/*
let i = 1;

while(i<=100)
{
    if(i%17==0)
    {
        break;
    }
    console.log(i)
    i++;
}
    */

//continue
//Print only the odd numbers from 1 to 30 using continue.
/*
let i =1;

while(i<=30)
{
    if(i%2==0)
    {   
        i++;
        continue;
    }

    console.log(i);
    i++;
}*/

//Print numbers from 1 to 50, skipping all numbers divisible by 4.
/*
let i =1;

while(i<=50)
{
    if(i%4==0)
    {   
        i++;
        continue;
    }

    console.log(i);
    i++;
}*/
/*
let fruits = ["apple","banana","orange","grape"];

let res =[];

for(let i=0; i<fruits.length; i++)
{   if(fruits[i]!='banana')
    {
    res.push(fruits[i]);
    }
}

console.log(res);
*/
/*
let word = "rhythmapple";

let vowels ="";

for(let i=0; i<word.length; i++)
{
    if('aeiou'.includes(word[i]))
    {
        vowels+=word[i];
    }
}

console.log(vowels);

*/
//Print the multiplication tables from 2 to 5 using nested for loops.
/*

for(let i=2; i<=5; i++)
{
    for(let j=1; j<=10; j++)
    {
        console.log(`${j}x${i}=${j*i}`)
    }
}
    */ 
