
// my version

//class
//readonly property
//optional property
//static property and methods


class employee
{
    readonly empId:any;
    empName:string;
    empMail?:any;
    salary:number;
    role:string;
    pass?:any;
    static company:string;

    constructor(empMail:any,pass:any,empId:any,empName:string,salary:number,role:string,company:string)
    {
        this.empId=empId;
        this.empName=empName;
        this.empMail=empMail;
        this.salary=salary;
        this.role=role;
        this.pass=pass;
        employee.company=company;
    }

    getempDetail()
    {
        console.log(`Helloo Emp Its me ${employee.company}`)
        console.log("Employees Access - Email and Pass Need? please provide!")
        if(this.empMail && this.pass)
        {
            console.log(`Employees Mail Id: ${this.empMail} `)
            console.log(`Employees Password : ${this.pass}`)
            console.log("Email and Pass word Successfully recevied and Access provided ")
           
            console.log("Personal Detail:-")
            console.log(`Emp ID : ${this.empId}`)
            console.log(`Emp Name : ${this.empName}`)
            console.log(`Emp Role : ${this.role}`)
            console.log(`Emp Salary : ${this.salary}`)
            console.log(`Company Name: ${employee.company}`)

            console.log("Successfully Your Information Add to Server")
        }

        else if(this.empMail && this.pass===undefined)
        {
            console.log(`Employees Mail Id: ${this.empMail} `)
            console.log("Password is Missing so Unable to Add your data to server");
        }

        else if(this.pass && this.empMail===undefined)
        {
           console.log(`Employees Password : ${this.pass}`) 
           console.log("Maild Id is Missing so Unable to Add your data to server");
        }

        else
        
        {
            console.log("Access not available so Unable to Add your data to server")
        }

    }

    static companyDescription()
    {
             console.log(`ACCENTURE is a global professional services company that provides consulting, technology, operations,
             cloud, artificial intelligence (AI), and digital transformation solutions to businesses around the world. Founded 
             in 1989 and headquartered in Dublin, Ireland, Accenture operates in more than 120 countries and serves clients across 
             industries such as banking, healthcare, retail, telecommunications, manufacturing, and government. The company is known 
             for helping organizations improve their business performance through innovative technologies, software development, 
             cybersecurity, data analytics, and cloud computing. With a strong focus on continuous learning, diversity, and innovation, 
             Accenture offers excellent career opportunities for fresh graduatesand experienced professionals, making it one of the 
             world's leading IT services and consulting companies.`)
    }


}

let info = new employee("sk@14mail.com", "Sk@14","acc1145","saikiran",100000,"softwaretester","Accenture")
info.getempDetail();

let info2 = new employee("srimathika@125.mail.com","sk@16","acc1145","Srimathika",100000,"softwaretester","Accenture")
info2.getempDetail();

employee.companyDescription();






/*

type EmployeeData = {
    empId: string;
    empName: string;
    salary: number;
    role: string;
    empMail?: string;
    pass?: string;
};

class Employee {

    empId: string;
    empName: string;
    salary: number;
    role: string;
    empMail?: string;
    pass?: string;

    constructor(emp: EmployeeData) {

        this.empId = emp.empId;
        this.empName = emp.empName;
        this.salary = emp.salary;
        this.role = emp.role;
        this.empMail = emp.empMail;
        this.pass = emp.pass;
    }
getDetails() {

    if (!this.empMail || !this.pass) {
        console.log("❌ Login Failed");
        return;
    }

    console.log("✅ Login Successful");

    console.log(`ID : ${this.empId}`);
    console.log(`Name : ${this.empName}`);
    console.log(`Role : ${this.role}`);
    console.log(`Salary : ${this.salary}`);
}

}

let info = new Employee({
    empMail:"sk14@mail.com",
    
    empId: "1145",
    empName: "saikiran",
    salary: 100000,
    role: "Software testing"
})
info.getDetails();
*/