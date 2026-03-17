abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greeting() {
    console.log(`Hello ${this.name}`);
  }
  public static nameClass() {
    return "Class name is Person";
  }
}

class RegisteredPerson extends Person {
  constructor(public name: string, public email: string, public phone: number) {
    super();
  }
}

const person: RegisteredPerson = new RegisteredPerson(
  "Raul",
  "raul@gmail.com",
  123
);

person.greeting();
console.log(person);
console.log(RegisteredPerson.nameClass());
