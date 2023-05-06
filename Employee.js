//UC1
const IS_ABSENT = 0
    let Employee = Math.floor(Math.random() * 10) % 2;
    
    if (employeeCheck == IS_ABSENT) {
        console.log("Employee is ABSENT");
    } else {
        console.log("Employee is PRESENT");
    }

    //UC2-Calculating Employeewage
const IS_PART_TIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHours = 0;
let employeeCheck = Math.floor(Math.random() * 10) % 3;

switch (employeeCheck) {

    case IS_PART_TIME:
        employeeHours = PART_TIME_HOURS;
        console.log("Employee works Part Time");
        break;

    case IS_FULL_TIME:
        employeeHours = FULL_TIME_HOURS;
        console.log("Employee works Full Time");
        break;

    default:
        employeeHours = 0;
}

let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Employee Wage = " + employeeWage);


//UC3  Function

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 3;

let employeeHrs = 0;

function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee works Part Time");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is ABSENT");
            return 0;
    }
}
    let empHrs =0;
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours = getWorkingHours(employeeCheck)
    let empWage = employeeHours * WAGE_PER_HOUR;
    console.log("Emp Wage = " + empWage);






