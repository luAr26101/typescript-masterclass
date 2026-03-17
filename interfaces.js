// 11. Introduction to interfaces
class Admin {
    userName;
    email;
    adminLevel;
    constructor(userName, email, adminLevel) {
        this.userName = userName;
        this.email = email;
        this.adminLevel = adminLevel;
    }
    login() {
        console.log("Admin is now logged in");
    }
}
class Customer {
    userName;
    email;
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }
    login() {
        console.log("Customer is now logged in");
    }
}
class Auth {
    static login(user) {
        user.login();
    }
}
const admin = new Admin("Mark", "mark@gmail.com", 1);
const customer = new Customer("John", "john@gmail.com");
Auth.login(admin);
Auth.login(customer);
// When dealing with just object should you use a custom type or use an interface?
// It's you choice, it doesn't matter.
// Use either of the two. Using interface brings consistency to the code.
const person = {
    name: "John",
    email: "john@email.com",
    age: 40,
};
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
var PermissionsList;
(function (PermissionsList) {
    PermissionsList["read"] = "read";
    PermissionsList["write"] = "write";
    PermissionsList["execute"] = "execute";
})(PermissionsList || (PermissionsList = {}));
const iUser = {
    name: "John",
    email: "john@email.com",
    phone: 123,
    gender: "Male",
};
const iUserWithAddress = {
    name: "Emma",
    email: "emma@email.com",
    phone: 123,
    gender: "Female",
    address: "San Francisco, no. 12",
};
const rob = {
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
var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["bus"] = "bus";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["bike"] = "bike";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["honda"] = "honda";
    AutomobileBrands["bmw"] = "bmw";
    AutomobileBrands["toyota"] = "toyota";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["white"] = "white";
    AutomobileColors["black"] = "black";
    AutomobileColors["silver"] = "silver";
})(AutomobileColors || (AutomobileColors = {}));
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
class Truck {
    brand;
    colors;
    description;
    capacity;
    licenseRenewalDate;
    driverName;
    type = "truck";
    constructor(brand, colors, description, capacity, licenseRenewalDate, driverName = "John") {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
        this.driverName = driverName;
    }
}
// const ferrari: Car = new Car(
//   AutomobileBrands.ferrari,
//   [AutomobileColors.black, AutomobileColors.red],
//   "This is a Ferrari"
// );
const toyotaTruck = new Truck(AutomobileBrands.toyota, [AutomobileColors.black, AutomobileColors.silver], "This is a Toyota truck", "10T", new Date());
// console.log(ferrari);
console.log(toyotaTruck);
class UserI {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Password {
    password;
    constructor(password) {
        this.password = password;
    }
}
class RegisteredUser extends UserI {
}
class DMUser {
    id;
    name;
    passwordHash;
    constructor(id, name, passwordHash) {
        this.id = id;
        this.name = name;
        this.passwordHash = passwordHash;
    }
}
// Intersection type
const UserAndAdmin = {
    name: "John",
    isAdmin: false,
};
console.log(UserAndAdmin);
// Union type
const UserOrAdmin = {
    isAdmin: false,
};
// interface IPerson extends Name, LastName {}
class CPerson {
    name;
    lastName;
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
const raul = new CPerson("Raul", "S");
console.log(raul);
export {};
// If you need to have certain implementations within your parent class (e.g. greeting method or static method) you are better of using Abstract classes
//# sourceMappingURL=interfaces.js.map