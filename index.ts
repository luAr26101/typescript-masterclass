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
let firstName: any = "Mark";

function returnParam(param: string) {
  return param;
}

// unknown type - the type of file is not known right now
//

function multiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiplyByTwo("sdlfj"));
console.log(multiplyByTwo(2));

// Type alias - is a custom type that you declare for yourself and it's not a default type in TypeScript

// Date
// Array
// Map
// Set
// Promise
// RegExp
// Error
// Function
// Symbol
// WeakMap
// WeakSet

// Duck typing is used by TypeScript for inference of types
// "If it looks like a duck and quacks like a duck, it's a duck"

// Declaration
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// Annotation
let firstName1: CustomString = "Mark";
let age1: CustomNumber = 12;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

// Inference, annotation, duck typing and declaration

// When you declare your own types, this is DECLARATION of types
// Whenever you annotate or assign a type to a variable is ANNOTATION

function addNumbers(a: number, b: number) {
  return a + b;
}

// INFERENCE (typeScript knows that the finalResult will be of type number)
let finalResult = addNumbers(1, 2);

// Whenever you have complex type you should always declare it
// Whenever you type is very simple and you can annotate it you should always annotate that type (there's no point in declaring a very simple type)
// When should you let TypeScript infer the type? When you are 100% sure inference will be correct and you dont' need to annotate or declare it

// Union types
type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
type DateOrUndefined = Date | undefined;

let stringOrNumber: StringOrNumber = 12;

function print(input?: string) {
  if (input) {
    console.log("input");
  } else {
    console.log("Please input something to print");
  }
}
console.log("-----------------");
print();
print("Hello world");

// Conditional types
type CustomDate1 = Date;
type CustomString1 = string;

type TrueString = CustomString extends string ? true : false;
type ConditionalNumber = CustomDate extends Date ? number : string;
type DateAssignment = CustomDate extends Date ? Date : undefined;

// Understanding Type Hierarchy
// never type is the most strict type of all
// unknown is the most liberal type
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = null extends any ? true : false;
type check4 = undefined extends void ? true : false;
type check5 = [] extends object ? true : false;
type check6 = Function extends object ? true : false;

// Whenever this function is invoked our application will stop, it will NEVER complete => never
// never type is only used whenever you are throwing an error in your application and you know that the process will never complete
const throwError = (errMessage: string) => {
  throw new Error(errMessage);
};

// object (lowercase) means any non-primitive value: objects, arrays and functions
// Object (uppercase) is the global JavaScript Object constructor and it means anything except null or undefined
let strings: Object = ["a", "b"];
let myFunction: Object = () => 2;

// Type casting
// Types can be casted as other types: what does that mean?

let firstName2 = <any>"Mark";
let lastName2 = "Doe" as any;

// User from api
let user = {
  name: "Mark",
  email: "mark@email.com",
};

type User = {
  name: string;
  email: string;
};

function fetchUser() {
  return user as User;
}

const fetchedUser = fetchUser();

let city = "New York"; // string - corect
const age = 32; // 32 - corect
let oldAge = 79 as const; // 79 - corect
let newAge = oldAge; // number; - incorect
let data = new Map(); // Map<any, any> - corect
let score = [90, 86, 100]; // number[] - corect
type Primitive = string | number | boolean; // string | number | boolean - corect
type CustomName = "John" extends string ? string : "John"; // John - incorect
type CustomAge = typeof newAge extends number ? 79 : number; // 79 - corect
type CheckData = typeof data extends Object ? true : false; // true - corect
type CheckScore = typeof score extends never ? {} : []; // [] - corect

// age = 85; - invalid - corect
// score.push(10); - valid - corect
// score.push("New Score") - invalid - corect
// let customAge: CustomAge = 50 - invalid - corect
// let primitive: Primitive = new Date() - invalid - corect
// let years: CheckScore = [] - valid - corect
