class employee
{
    eid:number;
    ename:string;
    salary:number;
    role:string;

 accenture( eid:number,ename:string,salary:number,role:string):void
 {

    this.eid=eid;
    this.ename=ename;
    this.salary=salary;
    this.role=role;
 }

 empDetail()
 {
    console.log(this.eid,this.ename,this.salary,this.role);
 }

}

let emp = new employee();

emp.accenture(11465,'saikiran',100000,'software tester');
emp.empDetail()



class mobile
{

   password:any;

   security(password:any)
   {
      this.password=password;
   }

   access()
   {
      console.log(this.password);
      console.log('Devices is Sucessfully Unlocked');
   }

}

let pass = new mobile()
 pass.security('Sai1234');

 pass.access();

 class life
 {

   wish:string;

   constructor(wish:string)
   {
      this.wish=wish;
   }


   bless()
   {
      console.log(this.wish);
   }

 }

 let you = new life('Your get fullfilled with abudance');

 you.bless();