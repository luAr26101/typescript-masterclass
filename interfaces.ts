// 11. Introduction to interfaces

// Interface is a representation of an object
// If I have 3 properties inside my interface those 3 properties
// will have to mandatory exinst in my class or object

// 12. Extending interfaces using extends keyword
// 13. Inheriting from multiple interfaces
// 14. Interfaces and generics

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
