class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    let employees = [];

    if (this.salary > amount) {
      employees.push(this);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }

  get totalEmployees() {
    let totalEmployees = 0;

    totalEmployees += 1;

    for (const subordinate of this.subordinates) {
      const allSubordinates = subordinate.totalEmployees;
      totalEmployees += allSubordinates;
    }
    return totalEmployees
  }

}

// CREATING EMPLOYEES
const ada      = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone   = new Employee('simone');
const ali      = new Employee('ali');
const sarah    = new Employee('sarah');
const andrew   = new Employee('andrew');


// ADDING CRAIG's SUBORDINATES
craig.addSubordinate(simone);
craig.addSubordinate(ali);
craig.addSubordinate(sarah);
craig.addSubordinate(andrew);

// ADDING ADA'S SUBORDINATES
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);


console.log(craig.totalEmployees);