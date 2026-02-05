function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3));
console.log(addNumbers(2, 2));
const city = "New York";
let students = 32;
let studentAsString = students.toString();
// Number types
let age = 32;
let year = 2024;
const numberOfMemebers = 61;
let stringToNumber = parseInt("1985");
// Boolean types
let isStudent = true;
const alwaysStudent = true;
let minimumAge = age >= 6 ? true : false;
// null and undefined
let user;
console.log(user);
let userRole;
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
let bigIntTwo = 12345635n;
console.log(bigIntOne);
console.log(bigIntTwo);
let c = bigIntOne - bigIntTwo;
let e = 123456n;
let f = Math.log(123);
// symbol - usually used as property keys inside objects
let id = Symbol(1234);
let alphabeticId = Symbol("id");
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
let message = "Hello, TypeScript!";
let ageX = 42;
let isStudentX = true;
let fetched = null;
let userX = undefined;
let largeNumber = 9007199254740991n;
let unique = Symbol("uniqueSymbol");
export {};
//# sourceMappingURL=index.js.map