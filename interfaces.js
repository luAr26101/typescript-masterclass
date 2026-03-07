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
export {};
//# sourceMappingURL=interfaces.js.map