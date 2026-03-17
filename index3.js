class RegisteredUser {
    name;
    email;
    phone;
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
const registeredUser = new RegisteredUser("John", "john@email.com", 123);
console.log(registeredUser);
export {};
//# sourceMappingURL=index3.js.map