let empName:string="saikiran";

let partner:string="?"

let company:string="Accenture";

let role:string="softwareTester";

let cityofWork:string="BENGALURU";

let detail:string=`i am working at accenture as a software tester`;

let space: string= "    sai kiran     "

// 1.length - used to find the length of the string

let lengOfname = empName.length;
console.log(lengOfname);

// 2.touppercase and tolowercase

let captilizeName = empName.toUpperCase();
console.log(captilizeName);

let lowerCase = cityofWork.toLowerCase();
console.log(lowerCase);

// 3.chatAt() and indexof() 

let resChatat = detail.charAt(14);
console.log(resChatat);
let indexDetail = detail.indexOf("as");
console.log(indexDetail);

// 4.substring() - it return  char between start index to end index exclusive.

let charReturn = detail.substring(14,19);
console.log(charReturn);

// 5.include()

let char2 = role.includes("e");
console.log(char2);

// 6.statwith() and endwith()

let findChar = empName.startsWith("s");
// console.log(findChar);

// console.log(detail.startsWith("w"));

console.log(detail.endsWith("r"));

// 7.replace()
let myPartner = partner.replace("?", "vaishnavi");

console.log(`my partner name is: ${myPartner}`)

// 8.split()

console.log(detail.split("at"));

// 9. trim(), trimend(), trimstart()
console.log(space.trim());
console.log(space.trimStart());

// 10.concat()

let life =empName.concat( myPartner);
console.log(life);

