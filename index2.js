class Person {
    greeting() {
        console.log(`Hello ${this.name}`);
    }
    static nameClass() {
        return "Class name is Person";
    }
}
class RegisteredPerson extends Person {
    name;
    email;
    phone;
    constructor(name, email, phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
const person = new RegisteredPerson("Raul", "raul@gmail.com", 123);
person.greeting();
console.log(person);
console.log(RegisteredPerson.nameClass());
export {};
//# sourceMappingURL=index2.js.map