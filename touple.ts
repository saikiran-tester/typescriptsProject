let empDetail:[number,string,string,number]=[1145,'saikiran','softwareTester',100000];

console.log('original files:'+empDetail);

//new add push()

empDetail.push(1185,'vaishnavi','developer',100000);

console.log('update files:'+ empDetail);

empDetail[3]=200000;
empDetail[7]=250000;

console.log('corrected one:'+ empDetail);
