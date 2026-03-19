// 1. What are generics?

// function declaration
function returnParam<Type>(param: Type): Type {
  return param;
}

const return1 = returnParam<string>("String");
const return2 = returnParam<number>(12);

// arrow function
const myParam: <T>(param: T) => T = (param) => param;

// function expression
const myParam2 = function <U>(param: U): U {
  return param;
};

type ObjectType = {
  myParam: <V, X>(param: V, param2: X) => V | X;
};

// type alias
type MyParam = <K>(param: K) => K;

// 2. Generic function declaration

type GetFirstElement = <T>(arr: T[]) => T | undefined;

const getFirstElement: GetFirstElement = <T>(arr: T[]) => {
  return arr[0];
};

const numbersArray = [1, 2, 3, 4];
const stringArray = ["a", "b", "c"];

let numberOutput = getFirstElement(numbersArray);
let stringOutput = getFirstElement(stringArray);

type FirstElement<T> = (arr: T[]) => T | undefined; // You declare this type when you need developers to write different functions for each type

const firstElement: FirstElement<string> = (arr) => {
  return arr[0];
};

const firstElementF: FirstElement<number> = (arr) => {
  return arr[0];
};

firstElement(["1", "2", "3"]);

// 3. Generic constraints with arrays
type HasLength = {
  length: number;
};

// constraint on the generic
function logLength<T extends HasLength>(item: T) {
  console.log(item.length);
}

logLength(numbersArray);
logLength(stringArray);
logLength("stringArray");

logLength({ name: "John", length: 12 });

// 4. Generics with objects
type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

let numberArrayPair: KeyValuePair<number, string[]> = {
  key: 1234,
  value: ["a", "b"],
};

type HasId = {
  id: number;
};

// constrait in object
function printId<T extends HasId>(obj: T) {
  console.log(obj.id);
}

const user = {
  id: 123,
  name: "Alice",
};

printId(user);

// printId({ name: "Raul" });

// 5. keyof operator - is used to create a union of all the keys of an object, it generates a new type

type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type UnionOfKeysOfEvents = keyof Events; // id | date | type

let idOfEvent: UnionOfKeysOfEvents = "id";
let dateOfEvents: UnionOfKeysOfEvents = "date";

// index signatures
type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;
type NumberAndString = {
  [key: string]: string;
};
type NumberAndStringKeyOf = keyof NumberAndString;

let stringObject: NumberAndString = {
  0: "First",
  second: "Second",
};

console.log(stringObject["0"]);

type Person = {
  name: string;
  age: string;
  address: string;
};

type PartialPerson = {
  [K in keyof Person]?: Person[K];
};

let partial: PartialPerson = {
  name: "John",
};

// 6. Generic default values
async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchDefault() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
}

fetchDefault();

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPost() {
  const post = await fetchData<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(post);
}

fetchPost();

// 7. Implementing polmorphic function

// type Filter = {
//   (array: number[], predicate: (item: number) => boolean): number[];
//   (array: string[], predicate: (item: string) => boolean): string[];
//   (array: object[], predicate: (item: object) => boolean): object[];
// };

const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  let result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i] as T)) {
      result.push(array[i] as T);
    }
  }
  return result;
};

let numbersArray1 = [1, 3, 4, 5, 8, 10, 11];

function predicate(item: number) {
  return item > 7;
}

let animals = ["cat", "dog", "rat"];

function filterCat(item: string) {
  return item === "cat";
}

console.log(filter(numbersArray1, predicate));
console.log(filter(animals, filterCat));

// Map
const map = function <T, U>(array: T[], modifier: (item: T) => U): (U | T)[] {
  if (array.length === 0) {
    return array;
  }
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(modifier(array[i] as T));
  }
  return result;
};

console.log(
  map([1, 2, 3, 10], function (item) {
    return item * 2;
  })
);
