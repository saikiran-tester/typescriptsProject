//inhertance
/*
class sivakumar{
    name:string;
    age:number;
    res:string;

    constructor(name:string, age:number, res:string,)
    {
        this.name=name;
        this.age=age;
        this.res=res;

    }

    responsibility()
    {
        console.log(this.name)
        console.log("I am takecare family")
    }

    property()
    {
        console.log("I have own property")
    }


}

class saikiran extends sivakumar
{
   
    job:string

    constructor(job:string)
    {
        super("Sivakumar", 50, "Family responsibility");

        this.job=job
        

    }


    savings()
    {
        console.log("I have more savings")
    }

    jobPay()
    {
        console.log(this.job);
        console.log(" I have job and earn more money");
    }
}

/*let life = new saikiran("sofware tester")
life.jobPay();
life.savings();
life.responsibility();
life.property();


let par : sivakumar = new saikiran("software tester");
par.jobpay();*/
/*
// super keyword

class sivakumar{
    name:string;
    age:number;
    res:string;

    constructor(name:string, age:number, res:string,)
    {
        this.name=name;
        this.age=age;
        this.res=res;

    }

       savings()
    {
        console.log("I have more savings by sivakumar")
    }

    jobPay()
    {
        
        console.log(" I have job and earn more money by sivakumar");
    }

    personalDetail()
    {
        console.log("Name : ", this.name)
        console.log("Age", this.age)
        console.log("Res: ", this.res)
    }

}

class saikiran extends sivakumar
{
    
   
    job:string

    constructor(name:string, age:number, res:string,job:string)
    {
        super("Sivakumar", 50, "Family responsibility");
        super.personalDetail();
        this.name=name;
        this.age=age;
        this.res=res;
        this.job=job
        

    }


    savings()
    {
        console.log("I have more savings by saikiran")
    }

    jobPay()
    {
        super.jobPay();
        console.log(this.job);
        console.log(" I have job and earn more money by saikiran");
    }

      personalDetail()
    {
        
        console.log("Name : ", this.name)
        console.log("Age", this.age)
        console.log("Res: ", this.res)
    }
}

let life = new saikiran("Saikiran",25,"take care family","software tester")

life.personalDetail();
life.jobPay(); */

// access modifer

class sivakumar{
   public name:string;
   private age:number;
protected res:string;

    constructor(name:string, age:number, res:string,)
    {
        this.name=name;
        this.age=age;
        this.res=res;

    }

    responsibility()
    {
        console.log(this.name)
        console.log("I am takecare family")
    }

    property()
    {
        console.log("I have own property")
    }

     personalDetail()
    {
        
        console.log("Name : ", this.name)
        console.log("Age", this.age)
        console.log("Res: ", this.res)
    }

}

class saikiran extends sivakumar
{
   
    job:string

    constructor(job:string)
    {
        super("Sivakumar", 50, "Family responsibility");

        this.job=job
        

    }


    savings()
    {
        console.log("I have more savings")
    }

    jobPay()

    {   console.log(life.res);
        console.log(this.job);
        console.log(" I have job and earn more money");
    }
}

let life = new saikiran("software tester")
//life.personalDetail();
life.jobPay()

console.log(life.name);
//console.log(life.age);
//console.log(life.res);