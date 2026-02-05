function addNumbers(a: number, b: number) {
  return a + b;
}

console.log(addNumbers(2, 3));
console.log(addNumbers(2, 2));

const city = "New York";
let students = 32;
let studentAsString: string = students.toString();

// Number types
let age: number = 32;
let year: number = 2024;
const numberOfMemebers = 61;
let stringToNumber: number = parseInt("1985");

// Boolean types
let isStudent: boolean = true;
const alwaysStudent = true;
let minimumAge = age >= 6 ? true : false;

// null and undefined
let user: undefined;
console.log(user);

let userRole: null;
userRole = null;
console.log(userRole);

console.log(user === userRole);

// bigint
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

let bigIntOne = BigInt(1234);
let bigIntTwo: bigint = 12345635n;
console.log(bigIntOne);
console.log(bigIntTwo);

let c = bigIntOne - bigIntTwo;

let e: bigint = 123456n;
let f = Math.log(123);

// symbol - usually used as property keys inside objects
let id: symbol = Symbol(1234);
let alphabeticId: symbol = Symbol("id");
let userS = {
  [id]: "1234",
  name: "Mark",
  getId() {
    return this[id];
  },
};

console.log(userS.name);
console.log(userS.getId());
console.log(id);

/**
 * Assign the correct types to each of the following variables
 */
let message: string = "Hello, TypeScript!";
let ageX: number = 42;
let isStudentX: boolean = true;
let fetched: null = null;
let userX: undefined = undefined;
let largeNumber: bigint = 9007199254740991n;
let unique: symbol = Symbol("uniqueSymbol");
