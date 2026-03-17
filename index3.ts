interface User {
  name: string;
  email: string;
  phone: number;
}

interface Greeting {
  greeting: () => void;
}

class RegisteredUser implements User, Greeting {
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {}
  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const registeredUser: RegisteredUser = new RegisteredUser(
  "John",
  "john@email.com",
  123
);
console.log(registeredUser);
