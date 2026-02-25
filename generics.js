// 1. What are generics?
// function declaration
function returnParam(param) {
    return param;
}
const return1 = returnParam("String");
const return2 = returnParam(12);
// arrow function
const myParam = (param) => param;
// function expression
const myParam2 = function (param) {
    return param;
};
const getFirstElement = (arr) => {
    return arr[0];
};
const numbersArray = [1, 2, 3, 4];
const stringArray = ["a", "b", "c"];
let numberOutput = getFirstElement(numbersArray);
let stringOutput = getFirstElement(stringArray);
const firstElement = (arr) => {
    return arr[0];
};
const firstElementF = (arr) => {
    return arr[0];
};
firstElement(["1", "2", "3"]);
// constraint on the generic
function logLength(item) {
    console.log(item.length);
}
logLength(numbersArray);
logLength(stringArray);
logLength("stringArray");
logLength({ name: "John", length: 12 });
let stringNumberPair = {
    key: "age",
    value: 30,
};
let numberArrayPair = {
    key: 1234,
    value: ["a", "b"],
};
// constrait in object
function printId(obj) {
    console.log(obj.id);
}
const user = {
    id: 123,
    name: "Alice",
};
printId(user);
let idOfEvent = "id";
let dateOfEvents = "date";
let stringObject = {
    0: "First",
    second: "Second",
};
console.log(stringObject["0"]);
let partial = {
    name: "John",
};
// 6. Generic default values
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchDefault() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}
fetchDefault();
async function fetchPost() {
    const post = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post);
}
fetchPost();
// 7. Implementing polmorphic function
// type Filter = {
//   (array: number[], predicate: (item: number) => boolean): number[];
//   (array: string[], predicate: (item: string) => boolean): string[];
//   (array: object[], predicate: (item: object) => boolean): object[];
// };
const filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
let numbersArray1 = [1, 3, 4, 5, 8, 10, 11];
function predicate(item) {
    return item > 7;
}
let animals = ["cat", "dog", "rat"];
function filterCat(item) {
    return item === "cat";
}
console.log(filter(numbersArray1, predicate));
console.log(filter(animals, filterCat));
// Map
const map = function (array, modifier) {
    if (array.length === 0) {
        return array;
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(modifier(array[i]));
    }
    return result;
};
console.log(map([1, 2, 3, 10], function (item) {
    return item * 2;
}));
export {};
//# sourceMappingURL=generics.js.map