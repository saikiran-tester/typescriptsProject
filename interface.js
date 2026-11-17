"use strict";
class Job {
    empId;
    empName;
    role;
    salary;
    experience;
    companyName;
    ProjectName;
    empDetail(empId, empName, role, salary, experience, companyName, ProjectName) {
        let detail = {
            empId: empId,
            empName: empName,
            role: role,
            salary: salary,
            experience: experience,
            companyName: companyName,
            ProjectName: ProjectName
        };
        console.log(detail);
    }
    login() {
        console.log('Successfully login at 10am');
    }
    work() {
        console.log('Project Work in processs');
    }
    logout() {
        console.log('work successfully completed and gonna Logout at 6pm');
    }
}
let result = new Job();
result.empDetail(1145, 'saikiran', 'softwareTester', 100000, 6, 'Accenture', 'Cyclone App');
result.login();
result.work();
result.logout();
