interface dataBase
{

    empId:number;
    empName:string;
    role:string;
    salary:number;
    experience:number;
    companyName:string;
    ProjectName:string;

   empDetail(empId:number,empName:string, role:string,
    salary:number,experience:number,companyName:string,ProjectName:string,): void

}

interface workRoutine extends dataBase
{
    login():void;
    work():void;
    logout():void;
}

class Job implements workRoutine
{ 

    empId!: number;
    empName!: string;
    role!: string;
    salary!: number;
    experience!: number;
    companyName!: string;
    ProjectName!: string;
   
    empDetail(empId:number,empName:string, role:string,
    salary:number,experience:number,companyName:string,ProjectName:string,): void 
    {

        let detail:any = {
            empId      :empId,
            empName    :empName,
            role       :role,
            salary     :salary,
            experience :experience,
            companyName:companyName,
            ProjectName:ProjectName
            
            
        };

        console.log(detail);
    }

    login(): void {
        console.log('Successfully login at 10am')
    }

    work(): void {
        console.log('Project Work in processs')
    }

    logout(): void {
        console.log('work successfully completed and gonna Logout at 6pm')
    }

}

let result = new Job()
result.empDetail(1145,'saikiran','softwareTester',100000,6,'Accenture','Cyclone App');
result.login();
result.work();
result.logout();