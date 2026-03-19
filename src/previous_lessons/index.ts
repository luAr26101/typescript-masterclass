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

// Working with objects
let person = {
  name: "Mark",
  age: 40,
};

let car: Object = {
  brand: "BMW",
  color: "red",
};

// not desired
car = [];
car = () => {};

let newCar: { brand: string; color: string } = {
  brand: "BMW",
  color: "red",
};

// newCar = []; - this will throw an error now

type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  // index signature
  [key: string]: AwardDetails;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  category?: string;
  author: Author;
  awards: Awards;
};

let post: Post = {
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

let post2: Post = {
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

// Union type with objects
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Luna",
  purrs: true,
};

// It has to have all of the properties of one of the types
let hybridAnimal: DogAndCatUnion = {
  name: "Luna",
  purrs: true,
  barks: true,
};

// Discriminating unions
type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Loading...";
    case "failed":
      return `Error ${state.code}`;
    case "success":
      return `Downloading ${state.response.title}`;
  }
}

// Intersection types
type Cat1 = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog1 = {
  name: string;
  barks: boolean;
  color: string;
};

type HybridAnimal1 = Dog1 & Cat1;

let hybridAnimal1: HybridAnimal1 = {
  name: "Max",
  color: "white",
  purrs: false,
  barks: true,
};

// Objects practice

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Seats = {
  [key: string]: string;
};

let a: number[] = [1, 2, 3];
let b: Array<string> = ["a", "b", "c"];
let c: (string | number | boolean)[] = ["a", 1, "b", false];

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};

type Airplanes = Airplane[];

let airplane: Airplane = {
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
let person1: [string, string, number] = ["John", "Doe", 18];

type UserTuple = [string, string, number, string?];
let userT: UserTuple = ["Mark", "Doe", 32, "mark@email.com"];

type ListOfStudents = [number, boolean, ...string[]];

const passingStudents: ListOfStudents = [3, true, "John", "Stella", "Mark"];

type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

let stringBooleansNumber: StringBooleansNumber = ["string", true, false, 32];
let booleansStringNumber: BooleansStringNumber = [
  true,
  false,
  true,
  "string",
  32,
];

// Readonly arrays and tuples

let numbers: readonly number[] = [1, 2, 3];
// numbers.push(1);

type ReadOnlyTuple = readonly [string, string, number];

let personR: ReadOnlyTuple = ["John", "Doe", 32]; // once declared it cannot be modified
// personR[0] = "Raul";

type a = Readonly<string[]>;
type b = ReadonlyArray<string | number>;

// tuple
type c = Readonly<[number, string, number]>;

// Enums are only available in TypeScript and not in JavaScript
// Enums are compiled in javaScript files
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up);
// Direction.Left = 5; -> not possible

enum Direction2 {
  Up = 1, // 0
  Down, // 2
  Left, // 3
  Right, // 4
}
console.log(Direction2.Right);

enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const personE: Person = {
  name: "John",
  email: "john@email.com",
  password: "123",
  role: Roles.ADMIN,
};

console.log(personE);

enum Direction3 {
  Up = 1,
  Down = "down",
  Left = 3,
}

// Enums vs Objects

const enum EDirection { // not compiled as an object to JavaScript, use const if you want to avoid unnecessary creation on objects in JavaScript
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // acts like enum

let eDirection = EDirection.Up;
let direction = Direction.Right;
console.log(eDirection);

// Computed values in enums
enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = ReadWrite | Delete,
}

console.log("---");
console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);

// Enums as Unions and Types

enum ShapeKind {
  Circle = "circle",
  Square = "square",
}

type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
};

type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
};

let circle: Circle = {
  radius: 100,
  kind: ShapeKind.Circle,
};

function printShape(shape: ShapeKind) {
  console.log(shape);
}

// Enums behave like unions of properties of enums in this case (Circle | Square)
printShape(ShapeKind.Circle);

// *1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
const onlyNumbers: number[] = [1, 2, 3];
const onlyStrings: string[] = ["John", "Doe"];

// *2. Create a tuple person that holds a string (name) and a number (age).

type DataTuple = [string, number];
let personTuple: DataTuple = ["John", 32];

// *3. Create a readonly array colors that holds strings and a readonly tuple point that holds
// * two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
const colors: readonly string[] = ["blue", "red"];
// colors.push("green");
const point: readonly [number, number] = [1, 2];
// point.push(3);

// *4. Create an enum called StatusEnum that holds 3 properties Active, Inactive, Pending
enum StatusEnum {
  Active,
  Inactive,
  Pending,
}
// *5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
  Active: 0,
  Inactive: 1,
  Pending: 2,
} as const; // behaves like a a enum

// Functions in TypeScript

// named function
function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and I'm ${age} years old. I live in ${country}`;
  }
  return `My name is ${name} and I'm ${age} years old`;
}
//! intro("John");

// function expression
const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and I'm ${age} years old`;
};

// arrow function
const intro3 = (name: string, age: number): string =>
  `My name is ${name} and I'm ${age} years old`;

// Default and optional parameters
function intro4(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and I'm ${age} years old. I live in ${country}`;
  }
  return `My name is ${name} and I'm ${age} years old`;
}
intro4("John", 20);
intro4("Mark", 20, "USA");

// Custom parameters and return types
enum AgeUnit {
  Years = "years",
  Months = "months",
}

// type GreetingFunction = (greeting: string) => string;

type PersonF = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  // Function call signatures
  greet: (greeting: string) => string;
};

const personF: PersonF = {
  name: "Scott",
  age: 30,
  ageUnit: AgeUnit.Years,
  greet: (greeting) => {
    return `${greeting} ${personF.name}`;
  },
};

function convertAgeToMonths(person: PersonF): PersonF {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }

  return person;
}

console.log(convertAgeToMonths(personF));
console.log(personF.greet("Hello"));

// Anonymous Functions
const students: string[] = ["Alice", "Bob", "Mark"];

// When using anonymous function with TypeScript,
// it will be able to infer each of this parameters in the anonymous function
students.map((student) => {
  console.log(student);
});

students.map(function (student) {
  console.log(student);
});

// Void OR Never
type WriteToDBFunction = (value: string) => void;

const writeToDatabase: WriteToDBFunction = function (value) {
  console.log(`Writing to a database`, value);
};

function throwError1(error: string): never {
  throw new Error(error);
}

type check1 = never extends void ? true : false;
type check7 = void extends never ? true : false;

// Async functions
async function fetchFromDatabase(id: number): Promise<any> {}

const anotherAsyncFunction = async (): Promise<any> => {};

async function returnString(id: number): Promise<string> {
  return Promise.resolve("string");
}

type UserF = {
  name: string;
  age: number;
};

async function returnUser(id: number): Promise<UserF> {
  return Promise.resolve({ name: "John", age: 20 });
}

// Rest parameters and arguments
function multiplyBy(by: number, ...numbers: number[]) {
  return numbers.map((number) => number * by);
}

console.log(multiplyBy(2, 3, 4, 5, 6, 7));

const args = [8, 5] as const;
const angle = Math.atan2(...args);
const angle1 = Math.atan2(...args);

type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbers1: Numbers = {
  a: 2,
  b: 3,
  c: 4,
};

// Parameter destructuring
function sum({ a, b, c }: Numbers) {
  return a + b + c;
}

console.log(sum(numbers1));

type FetchDataFunction = (
  url: string,
  ...params: string[]
) => Promise<string[]>;

const fetchData: FetchDataFunction = async (url, ...queryParams) => {
  const params = queryParams.join("&");
  const theUrl = `${url}?${params}`;
  console.log(theUrl);
  const response = await fetch(theUrl);
  const data = await response.json();
  return queryParams.map((_, index) => `data${index + 1}`);
};

const post1 = await fetchData(
  "https://jsonplaceholder.typicode.com/posts",
  "userId=1"
);

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

// Dynamic function = a function which can be invoked with multiple
// arguments and depending on how many arguments you are passing to the function
// the resut output of that function will be different.
// This is where we use function overloading in TypeScript

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate,
  returnDateOrDepartingFrom,
  departingFromOrDestination,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
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

function greet(name: string): string {
  return `Hello, ${name}`;
}

//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.

type Product = {
  id: number;
  name: string;
};

function getProduct(id: number): Product {
  return {
    id,
    name: `Product with id: ${id}`,
  };
}

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.

type Calculator = (a: number, b: number) => number;

const add: Calculator = function (a, b) {
  return a + b;
};

const subtract: Calculator = function (a, b) {
  return a - b;
};

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

function logMessage(message: string): void {
  console.log(message);
}

function throwErrorF(errorMessage: string): never {
  throw new Error(errorMessage);
}
