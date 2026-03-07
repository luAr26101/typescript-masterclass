// 1. What are classes?
// A class is a template or a blueprint of creating objects.
// It defines a set of properties and methods that are common to all objects of one type
// 2. Create first class and instance
// property in object === field in a class
// method in object === method in a class
// 3. Constructor function - is invoked everytime a new instance of the class is created
// 4. This keyword
// 5. Classes as types
// 6. Optional and readonly fields
// 7. Inheritance with classes - on class inherits the properties of another class
// 8. super method
// 9. Access modifers - exist only in the TypeScript world
// Access modifiers - are used to control whether certain methods or properties are visible to code outside the class. 3 types: public, protected(accesible within the class and within the child class, NOT available in instance of a class) and private (ONLY available within the class)
// 10. Public members - default access modifier
// 11. Protected members
// 12. Private members
// 13. Which acces modifier to use?
// 14. Overriding methods in child classes
// 15. Shorthand for constructor
// 16. More control over classes
// 17. Using Mutators - setters
// 18. Using Accessors - getters
// 19. Static members - it's a member (property or method) that it's available without instantiating the class
// 20. Understading static blocks
// 21. Generics with classes
// 22. Generics use case
// 23. Concrete Implementation with User Type
// 24. Intro to Mixins - in TypeScript are a patter to add properties and methods from one class to another
// 25. Composing new classes with mixins
// class User {
//   public name: string;
//   // Readonly field
//   readonly email: string;
//   // Optional field
//   lastName?: string;
//   private phone: number;
//   constructor(name: string, email: string, phone: number, lastName?: string) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     if (lastName !== undefined) {
//       this.lastName = lastName;
//     }
//   }
//   public greet(): string {
//     return `Hello ${this.name}`;
//   }
// }
// Shorthand
class User {
    name;
    email;
    phone;
    lastName;
    constructor(name, email, phone, lastName) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.lastName = lastName;
    }
    greet() {
        return `Hello, ${this.name}.`;
    }
}
class Admin extends User {
    isAdmin = true;
    usersReporting;
    constructor(name, email, phone, usersReporting, lastName) {
        // logical evaluation can be done here
        super(name, email, phone, lastName);
        this.usersReporting = usersReporting;
    }
    greet() {
        return `Hello ${this.name}. I'm the admin.`;
    }
}
// Instance of a class
const user = new User("John", "john@email.com", 123);
const admin = new Admin("Mark", "mark@email.com", 123, 23);
user.lastName = "last";
// user3.email = "new@email.com";
console.log(user.greet());
console.log(admin.greet());
/**
 * * Practice Problem
 * * You are building a simple library management system.
 * * Implement the following requirements using TypeScript:
 *
 * TODO: 1. Create a class Book with the following properties:
 * * - title (string, required)
 * * - author (string, required)
 * * - yearPublished (number, optional)
 * * - ISBN (string, readonly)
 *
 *
 * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
 *
 * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
 *
 * TODO: 4. Create an instance of the Book class and log its details.
 *
 * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
 *
 * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
 * * - fileSize (number, required)
 * * - format (string, required)
 *
 * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
 *
 * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.
 */
class Book {
    title;
    author;
    yearPublished;
    ISBN;
    constructor(title, author, ISBN, yearPublished) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        if (yearPublished !== undefined) {
            this.yearPublished = yearPublished;
        }
    }
}
class EBook extends Book {
    fileSize;
    format;
    constructor(title, author, ISBN, fileSize, format, yearPublished) {
        super(title, author, ISBN, yearPublished);
        this.fileSize = fileSize;
        this.format = format;
    }
}
const book = new Book("The Pragmatic Programmer", "Andrew Hunt", "978-0201616224", 1999);
function logBookDetails(book) {
    const { title, author, ISBN, yearPublished } = book;
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`ISBN: ${ISBN}`);
    if (yearPublished !== undefined) {
        console.log(`Year Published: ${yearPublished}`);
    }
}
console.log("These are the book details:");
logBookDetails(book);
const eBook = new EBook("Effective TypeScript", "Dan Vanderkam", "978-1492053743", 3, "EPUB");
console.log("--- Ebook details: ---");
logBookDetails(eBook);
// eBook.ISBN = '123';
class Person {
    firstName;
    lastName;
    _age;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Setter (mutators)
    set age(age) {
        if (age > 200 || age < 0) {
            throw new Error("The age must be within the age range 0-200");
        }
        this._age = age;
    }
    // Getter (accessor)
    get age() {
        if (this._age === undefined) {
            throw new Error("The age property is not defined.");
        }
        return this._age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const john = new Person("John", "Doe");
const mark = new Person("Mark", "Doe");
john.age = 45;
console.log(john.age);
console.log(john.fullName);
// Static methods are created to be used globally into the application
function loadInitialCount() {
    return 10;
}
class Counter {
    static count = 0;
    static increment() {
        Counter.count++;
    }
    // static block - It is executed whenever the class is initiated
    // it can depend on external function within the application
    static {
        console.log("initializing counter class");
        Counter.count = loadInitialCount();
    }
}
console.log("--------------");
Counter.increment();
console.log(Counter.count);
const counter = new Counter();
// counter.count;
class Box {
    _value;
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("hello");
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getById(id) {
        return this.items.find((item) => item.id === id);
    }
    getAll() {
        return this.items;
    }
    removeById(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
const usersRepository = new Repository();
const booksRepository = new Repository();
usersRepository.add({ id: 1, name: "John", email: "john@email.com" });
booksRepository.add({ id: 1, title: "Harry Potter", ISBN: 2424 });
console.log(usersRepository.getById(1));
console.log(booksRepository.getAll());
function TimeStamp(BaseClass) {
    return class extends BaseClass {
        timestamp = new Date();
        getTimestamp() {
            return this.timestamp;
        }
    };
}
class UserMix {
    name;
    constructor(name) {
        this.name = name;
    }
}
class UserWithTimestamp extends TimeStamp(UserMix) {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`Timestamp: ${this.getTimestamp()}`);
    }
}
const newUser = new UserWithTimestamp("Alice", 30);
console.log(newUser);
newUser.displayInfo();
/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */
class Employee {
    name;
    age;
    id;
    _salary;
    static companyName = "Tech Solutions Inc";
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    set salary(amount) {
        if (amount <= 0) {
            throw new Error("Salary should be greater than 0");
        }
        this._salary = amount;
    }
    get salary() {
        if (this._salary === undefined) {
            throw new Error("Salary is not defined");
        }
        return this._salary;
    }
    static getCompanyName() {
        return Employee.companyName;
    }
    getDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
class Manager extends Employee {
    name;
    age;
    id;
    department;
    constructor(name, age, id, department) {
        super(name, age, id);
        this.name = name;
        this.age = age;
        this.id = id;
        this.department = department;
    }
    getDetails() {
        console.log("From Manager Class");
        // invoke getDetails method of the parent class
        super.getDetails();
        console.log(`Department: ${this.department}`);
    }
}
console.log(`--- Practice ---`);
const raul = new Employee("Raul", 40, 1);
raul.salary = 3800;
console.log(raul.salary);
const vasile = new Manager("Vasile", 42, 2, "Sales");
vasile.salary = 4200;
raul.getDetails();
vasile.getDetails();
console.log(Employee.getCompanyName());
export {};
//# sourceMappingURL=classes.js.map