// 11. Introduction to interfaces

// Interface is a representation of an object
// If I have 3 properties inside my interface those 3 properties
// will have to mandatory exist in my class or object

// 12. Extending interfaces using extends keyword
// 13. Inheriting from multiple interfaces
// 14. Interfaces and generics
// 15. Assigning generics to interfaces
// 16. Using multiple types as generics
// 17. Using interfaces with classes
// 18. Multiple classes using the same interface
// 19. Implementing multiple interfaces
// 20. Multiple inheritance in classes using interfaces (classes in TypeScript can inherit only from one class)
// 21. Interfaces and Access Modifiers
// 22. Declaration Merging Interfaces
// 23. Difference between a Type and an Interface
// 24. Difference between a Abstract Class and an Interface
// 25. What should you use? Abstract Class or Interface

// Interface = contract
interface User {
  userName: string;
  email: string;
  login(): void;
}

class Admin implements User {
  constructor(
    public userName: string,
    public email: string,
    public adminLevel: number
  ) {}

  login(): void {
    console.log("Admin is now logged in");
  }
}

class Customer implements User {
  constructor(public userName: string, public email: string) {}
  login(): void {
    console.log("Customer is now logged in");
  }
}

class Auth {
  public static login(user: User) {
    user.login();
  }
}

const admin: Admin = new Admin("Mark", "mark@gmail.com", 1);
const customer: Customer = new Customer("John", "john@gmail.com");

Auth.login(admin);
Auth.login(customer);

interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

// When dealing with just object should you use a custom type or use an interface?
// It's you choice, it doesn't matter.
// Use either of the two. Using interface brings consistency to the code.
const person: Person = {
  name: "John",
  email: "john@email.com",
  age: 40,
};

enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permissions: PermissionsList[];
}

interface IUser {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface IAdmin extends IUser, Role, UserPermissions {
  numberOfUsersReporting: number;
}

interface IUserWithAddress extends IUser {
  address: string;
}

const iUser: IUser = {
  name: "John",
  email: "john@email.com",
  phone: 123,
  gender: "Male",
};

const iUserWithAddress: IUserWithAddress = {
  name: "Emma",
  email: "emma@email.com",
  phone: 123,
  gender: "Female",
  address: "San Francisco, no. 12",
};

const rob: IAdmin = {
  name: "Rob",
  email: "rob@email.com",
  phone: 12,
  gender: "Male",
  role: Roles.admin,
  permissions: [
    PermissionsList.execute,
    PermissionsList.read,
    PermissionsList.write,
  ],
  numberOfUsersReporting: 12,
};
// console.log(iUser);
// console.log(iUserWithAddress);
console.log(rob);

enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

// Interfaces are a contract for the public members of a class.
// Interfaces are the blueprint of the final object that a class will create
interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

// const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> =
//   {
//     type: AutomobileTypes.car,
//     brand: AutomobileBrands.ferrari,
//     colors: [AutomobileColors.black, AutomobileColors.red],
//     description: "This is a Ferrari",
//   };

// const honda: Automobile<string, string, string> = {
//   type: "car",
//   brand: "Honda",
//   colors: ["silver", "black"],
//   description: "This is a honda",
// };

// const toyota: Automobile<string, AutomobileBrands, number> = {
//   type: "car",
//   brand: AutomobileBrands.toyota,
//   colors: [234, 235],
//   description: "This is a Toyota",
// };

// console.log(honda);
// console.log(toyota);
// console.log(ferrari);

// class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
//   public type: string = "car";
//   constructor(
//     public brand: AutomobileBrands,
//     public colors: AutomobileColors[],
//     public description: string
//   ) {}
// }

class Truck
  implements
    Automobile<string, AutomobileBrands, AutomobileColors>,
    CommercialVehicle
{
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date,
    private driverName: string = "John"
  ) {}
}

// const ferrari: Car = new Car(
//   AutomobileBrands.ferrari,
//   [AutomobileColors.black, AutomobileColors.red],
//   "This is a Ferrari"
// );

const toyotaTruck = new Truck(
  AutomobileBrands.toyota,
  [AutomobileColors.black, AutomobileColors.silver],
  "This is a Toyota truck",
  "10T",
  new Date()
);

// console.log(ferrari);
console.log(toyotaTruck);

class UserI {
  constructor(public name: string) {}
}

class Password {
  constructor(public password: string) {}
}

class RegisteredUser extends UserI {}

// Declaration merging
interface IDMUser {
  id: number;
  name: string;
}

interface IDMUser {
  passwordHash: string;
}

class DMUser implements IDMUser {
  constructor(
    public id: number,
    public name: string,
    public passwordHash: string
  ) {}
}

// Types vs Interfaces

// Types provide us with the ability to create union types and intersection types
// Types can be used to declare tuples
type TUser = {
  name: string;
};

type TAdminUser = {
  isAdmin: boolean;
};

// Intersection type
const UserAndAdmin: TUser & TAdminUser = {
  name: "John",
  isAdmin: false,
};

console.log(UserAndAdmin);

// Union type
const UserOrAdmin: TUser | TAdminUser = {
  isAdmin: false,
};

// Tuples
type Response = [string, number];

// TypeScript automatically merges two interfaces with the same name, this does not have to types
// Types cannot extend each other
// Implementation of multiple interfaces is possible when you use then in conjunction with classes

// type TUser {
//   lastName: string;
// }

// Interfaces are merged
interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

// interface IPerson extends Name, LastName {}
class CPerson implements Name, LastName {
  constructor(public name: string, public lastName: string) {}
}

const raul: CPerson = new CPerson("Raul", "S");
console.log(raul);

// If you need to have certain implementations within your parent class (e.g. greeting method or static method) you are better of using Abstract classes
