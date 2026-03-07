// 1. Module introduction - Abstract classes and interfaces
// 2. Introduction to abstract classes
// 3. Shared methods in abstract classes
// 4. Protected Constructor and Child classes
// 5. Shared methods in abstract classes
// 6. Protected constructor and child classes
// 7. Add holidays to classes
// 8. Print holidays method
// 9. Method Overriding and child classes
// 10. Introduction to abstract methods

// Abstract classes cannot be instantiated
type Holidays = {
  date: Date;
  reason: string;
}[];
abstract class Department {
  protected abstract holidays: Holidays;

  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  // Abstract methods are definitions and don't have a body
  public abstract printHolidays(): void;
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays.");
    }
    console.log(`Here is the list of holidays for ${this.name}`);
    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("Admin Department");
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays.");
    }
    console.log(`Here is the list of holidays for ${this.name}`);
    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

// const department = new Department(name: 'Admin'); // cannot do this

const itHolidays: Holidays = [
  {
    date: new Date(2022, 11, 25),
    reason: "Christmas",
  },
  {
    date: new Date(2022, 10, 2),
    reason: "IT Department Day",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
  {
    date: new Date(2022, 9, 1),
    reason: "Admin Department Day",
  },
];

const itDep: ItDepartment = new ItDepartment();
itDep.addHolidays(itHolidays);
const adminDep: AdminDepartment = new AdminDepartment();
adminDep.addHolidays(adminHolidays);
// console.log(itDep);
// console.log(adminDep);
itDep.printHolidays();
console.log("--------------");
adminDep.printHolidays();
