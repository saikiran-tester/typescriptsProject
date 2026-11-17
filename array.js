"use strict";
/*let fruit : string=['apple','orange','graphes'];

//console.log(fruit);

for(let i=0; i<fruit.length;i++)
{
    console.log(fruit[i]);
}*/
let store = [['tomato', 'carrot', 'potato'],
    ['apple', 'orange', 'graphes'],
    ['biscuit', 'chocolate', 'chips']];
/*  for(let i=0;i<store.length;i++)
  {
      for( let j=0; j<store[i].length; j++)
      {
          console.log(store[i][j]);
      }
  } */
for (let i in store) {
    for (let j in store[i]) {
        console.log(store[i][j]);
    }
}
