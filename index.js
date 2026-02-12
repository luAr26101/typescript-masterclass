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
export {};
//# sourceMappingURL=index.js.map