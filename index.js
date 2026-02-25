// function addNumbers(a: number, b: number) {
//   return a + b;
// }
// console.log(addNumbers(2, 3));
// console.log(addNumbers(2, 2));
// const city = "New York";
// let students = 32;
// let studentAsString: string = students.toString();
// // Number types
// let age: number = 32;
// let year: number = 2024;
// const numberOfMemebers = 61;
// let stringToNumber: number = parseInt("1985");
// // Boolean types
// let isStudent: boolean = true;
// const alwaysStudent = true;
// let minimumAge = age >= 6 ? true : false;
// // null and undefined
// let user: undefined;
// console.log(user);
// let userRole: null;
// userRole = null;
// console.log(userRole);
// console.log(user === userRole);
// // bigint
// const safeInt = Number.MAX_SAFE_INTEGER;
// console.log(safeInt);
// const safeIntPlusOne = safeInt + 1;
// const safeIntPlusTwo = safeInt + 2;
// console.log(safeIntPlusOne);
// console.log(safeIntPlusTwo);
// let bigIntOne = BigInt(1234);
// let bigIntTwo: bigint = 12345635n;
// console.log(bigIntOne);
// console.log(bigIntTwo);
// let c = bigIntOne - bigIntTwo;
// let e: bigint = 123456n;
// let f = Math.log(123);
// // symbol - usually used as property keys inside objects
// let id: symbol = Symbol(1234);
// let alphabeticId: symbol = Symbol("id");
// let userS = {
//   [id]: "1234",
//   name: "Mark",
//   getId() {
//     return this[id];
//   },
// };
// console.log(userS.name);
// console.log(userS.getId());
// console.log(id);
// /**
//  * Assign the correct types to each of the following variables
//  */
// let message: string = "Hello, TypeScript!";
// let ageX: number = 42;
// let isStudentX: boolean = true;
// let fetched: null = null;
// let userX: undefined = undefined;
// let largeNumber: bigint = 9007199254740991n;
// let unique: symbol = Symbol("uniqueSymbol");
// any type
let firstName = "Mark";
function returnParam(param) {
    return param;
}
// unknown type - the type of file is not known right now
//
function multiplyByTwo(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide a valid number";
}
console.log(multiplyByTwo("sdlfj"));
console.log(multiplyByTwo(2));
// Annotation
let firstName1 = "Mark";
let age1 = 12;
let today = new Date();
let unique = Symbol();
// Inference, annotation, duck typing and declaration
// When you declare your own types, this is DECLARATION of types
// Whenever you annotate or assign a type to a variable is ANNOTATION
function addNumbers(a, b) {
    return a + b;
}
// INFERENCE (typeScript knows that the finalResult will be of type number)
let finalResult = addNumbers(1, 2);
let stringOrNumber = 12;
function print(input) {
    if (input) {
        console.log("input");
    }
    else {
        console.log("Please input something to print");
    }
}
console.log("-----------------");
print();
print("Hello world");
// Whenever this function is invoked our application will stop, it will NEVER complete => never
// never type is only used whenever you are throwing an error in your application and you know that the process will never complete
const throwError = (errMessage) => {
    throw new Error(errMessage);
};
// object (lowercase) means any non-primitive value: objects, arrays and functions
// Object (uppercase) is the global JavaScript Object constructor and it means anything except null or undefined
let strings = ["a", "b"];
let myFunction = () => 2;
// Type casting
// Types can be casted as other types: what does that mean?
let firstName2 = "Mark";
let lastName2 = "Doe";
// User from api
let user = {
    name: "Mark",
    email: "mark@email.com",
};
function fetchUser() {
    return user;
}
const fetchedUser = fetchUser();
let city = "New York"; // string - corect
const age = 32; // 32 - corect
let oldAge = 79; // 79 - corect
let newAge = oldAge; // number; - incorect
let data = new Map(); // Map<any, any> - corect
let score = [90, 86, 100]; // number[] - corect
// age = 85; - invalid - corect
// score.push(10); - valid - corect
// score.push("New Score") - invalid - corect
// let customAge: CustomAge = 50 - invalid - corect
// let primitive: Primitive = new Date() - invalid - corect
// let years: CheckScore = [] - valid - corect
// Working with objects
let person = {
    name: "Mark",
    age: 40,
};
let car = {
    brand: "BMW",
    color: "red",
};
// not desired
car = [];
car = () => { };
let newCar = {
    brand: "BMW",
    color: "red",
};
let post = {
    title: "This is a blog post",
    content: "Content of the blog post",
    date: new Date(),
    category: "News",
    author: {
        name: "John",
        age: 22,
        email: "john@doe.com",
        type: "human",
    },
    awards: {
        web: {
            name: "Web Awards",
            date: new Date(),
        },
        web3: {
            name: "Web 3",
            date: new Date(),
        },
    },
};
let post2 = {
    title: "This is a blog post",
    content: "Content of the blog post",
    date: new Date(),
    author: {
        name: "John",
        age: 22,
        email: "john@doe.com",
        type: "ai",
    },
    awards: {
        web: {
            name: "Web Awards",
            date: new Date(),
        },
        web3: {
            name: "Web 3",
            date: new Date(),
        },
    },
};
let dog = {
    name: "Buddy",
    barks: true,
    wags: true,
};
let cat = {
    name: "Luna",
    purrs: true,
};
// It has to have all of the properties of one of the types
let hybridAnimal = {
    name: "Luna",
    purrs: true,
    barks: true,
};
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        case "failed":
            return `Error ${state.code}`;
        case "success":
            return `Downloading ${state.response.title}`;
    }
}
let hybridAnimal1 = {
    name: "Max",
    color: "white",
    purrs: false,
    barks: true,
};
let a = [1, 2, 3];
let b = ["a", "b", "c"];
let c = ["a", 1, "b", false];
let airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 7867856751,
    },
    seats: {
        A1: "John Doe",
        A2: "Mark Doe",
        A3: "Sam Doe",
    },
};
// Arrays and Enums
// Tuples - exist only inside TypeScript, is an array with fixed shape
// Tuple
let person1 = ["John", "Doe", 18];
let userT = ["Mark", "Doe", 32, "mark@email.com"];
const passingStudents = [3, true, "John", "Stella", "Mark"];
let stringBooleansNumber = ["string", true, false, 32];
let booleansStringNumber = [
    true,
    false,
    true,
    "string",
    32,
];
// Readonly arrays and tuples
let numbers = [1, 2, 3];
let personR = ["John", "Doe", 32]; // once declared it cannot be modified
// Enums are only available in TypeScript and not in JavaScript
// Enums are compiled in javaScript files
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
// Direction.Left = 5; -> not possible
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
const personE = {
    name: "John",
    email: "john@email.com",
    password: "123",
    role: Roles.ADMIN,
};
console.log(personE);
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 1] = "Up";
    Direction3["Down"] = "down";
    Direction3[Direction3["Left"] = 3] = "Left";
})(Direction3 || (Direction3 = {}));
// Enums vs Objects
var EDirection;
(function (EDirection) {
    EDirection[EDirection["Up"] = 0] = "Up";
    EDirection[EDirection["Down"] = 1] = "Down";
    EDirection[EDirection["Left"] = 2] = "Left";
    EDirection[EDirection["Right"] = 3] = "Right";
})(EDirection || (EDirection = {}));
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
}; // acts like enum
let eDirection = EDirection.Up;
let direction = Direction.Right;
console.log(eDirection);
// Computed values in enums
var AccessPermissions;
(function (AccessPermissions) {
    AccessPermissions[AccessPermissions["None"] = 0] = "None";
    AccessPermissions[AccessPermissions["Read"] = 1] = "Read";
    AccessPermissions[AccessPermissions["Write"] = 2] = "Write";
    AccessPermissions[AccessPermissions["ReadWrite"] = 3] = "ReadWrite";
    AccessPermissions[AccessPermissions["Delete"] = 4] = "Delete";
    AccessPermissions[AccessPermissions["All"] = 7] = "All";
})(AccessPermissions || (AccessPermissions = {}));
console.log("---");
console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);
// Enums as Unions and Types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "circle";
    ShapeKind["Square"] = "square";
})(ShapeKind || (ShapeKind = {}));
let circle = {
    radius: 100,
    kind: ShapeKind.Circle,
};
function printShape(shape) {
    console.log(shape);
}
// Enums behave like unions of properties of enums in this case (Circle | Square)
printShape(ShapeKind.Circle);
// *1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
const onlyNumbers = [1, 2, 3];
const onlyStrings = ["John", "Doe"];
let personTuple = ["John", 32];
// *3. Create a readonly array colors that holds strings and a readonly tuple point that holds
// * two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
const colors = ["blue", "red"];
// colors.push("green");
const point = [1, 2];
// point.push(3);
// *4. Create an enum called StatusEnum that holds 3 properties Active, Inactive, Pending
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Active"] = 0] = "Active";
    StatusEnum[StatusEnum["Inactive"] = 1] = "Inactive";
    StatusEnum[StatusEnum["Pending"] = 2] = "Pending";
})(StatusEnum || (StatusEnum = {}));
// *5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
    Active: 0,
    Inactive: 1,
    Pending: 2,
}; // behaves like a a enum
// Functions in TypeScript
// named function
function intro(name, age, country) {
    if (country) {
        return `My name is ${name} and I'm ${age} years old. I live in ${country}`;
    }
    return `My name is ${name} and I'm ${age} years old`;
}
//! intro("John");
// function expression
const intro2 = function (name, age) {
    return `My name is ${name} and I'm ${age} years old`;
};
// arrow function
const intro3 = (name, age) => `My name is ${name} and I'm ${age} years old`;
// Default and optional parameters
function intro4(name, age, country) {
    if (country) {
        return `My name is ${name} and I'm ${age} years old. I live in ${country}`;
    }
    return `My name is ${name} and I'm ${age} years old`;
}
intro4("John", 20);
intro4("Mark", 20, "USA");
// Custom parameters and return types
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const personF = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years,
    greet: (greeting) => {
        return `${greeting} ${personF.name}`;
    },
};
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
console.log(convertAgeToMonths(personF));
console.log(personF.greet("Hello"));
// Anonymous Functions
const students = ["Alice", "Bob", "Mark"];
// When using anonymous function with TypeScript,
// it will be able to infer each of this parameters in the anonymous function
students.map((student) => {
    console.log(student);
});
students.map(function (student) {
    console.log(student);
});
const writeToDatabase = function (value) {
    console.log(`Writing to a database`, value);
};
function throwError1(error) {
    throw new Error(error);
}
// Async functions
async function fetchFromDatabase(id) { }
const anotherAsyncFunction = async () => { };
async function returnString(id) {
    return Promise.resolve("string");
}
async function returnUser(id) {
    return Promise.resolve({ name: "John", age: 20 });
}
// Rest parameters and arguments
function multiplyBy(by, ...numbers) {
    return numbers.map((number) => number * by);
}
console.log(multiplyBy(2, 3, 4, 5, 6, 7));
const args = [8, 5];
const angle = Math.atan2(...args);
const angle1 = Math.atan2(...args);
let numbers1 = {
    a: 2,
    b: 3,
    c: 4,
};
// Parameter destructuring
function sum({ a, b, c }) {
    return a + b + c;
}
console.log(sum(numbers1));
const fetchData = async (url, ...queryParams) => {
    const params = queryParams.join("&");
    const theUrl = `${url}?${params}`;
    console.log(theUrl);
    const response = await fetch(theUrl);
    const data = await response.json();
    return queryParams.map((_, index) => `data${index + 1}`);
};
const post1 = await fetchData("https://jsonplaceholder.typicode.com/posts", "userId=1");
// const exampleData = await fetchData(
//   "https://api.example.com",
//   "param1=value1",
//   "param2=value2"
// );
console.log(post1);
// Function overloading
const str = "Hello, world";
const part1 = str.slice(7);
const part2 = str.slice(7, 10);
console.log("---");
console.log(part1);
console.log(part2);
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        };
    }
    throw new Error("Please provide valid details to reserve a ticket.");
};
console.log("--- Reservations ---");
console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
/**
 * Practice Excercise for functions
 */
//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name) {
    return `Hello, ${name}`;
}
function getProduct(id) {
    return {
        id,
        name: `Product with id: ${id}`,
    };
}
const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.
function logMessage(message) {
    console.log(message);
}
function throwErrorF(errorMessage) {
    throw new Error(errorMessage);
}
export {};
//# sourceMappingURL=index.js.map