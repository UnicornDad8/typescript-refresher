// TYPE ALIAS:
// A type alias in TypeScript is a way of creating a new name
// for an existing type. It is used to define a new type that
// is based on an existing type but has a different name.
// A type alias can be used to simplify complex types, make the
// code more readable, or to create reusable types.

// INTERFACE:
// An interface in TypeScript is a syntactical contract that
// defines the structure and behavior of an object. It is used
// to define the shape of an object and the properties and methods
// it must have. In other words, an interface defines the contract
// that must be followed by an object.

// MAIN DIFFERENCE:
// The main difference between type aliases and interfaces is that
// type aliases are used to create new names for existing types,
// whereas interfaces are used to define the shape and behavior
// of an object.

function prod1(a: number, b: number) /*: number*/ {
  return a * b;
}

// type Alias
type Calc1 = (income: number, percentage: number) => number;

// defining function types
function calculateTax1(income: number, percentage: number, calc: Calc1) {
  return calc(income, percentage);
}

// console.log(calculateTax1(1000, 0.3, prod1));

interface Credentials1 {
  username: string;
  password: string;
  email: string;
  // we can also have return types inside an interface
  login: () => void;
}

// let credentials1: Credentials1 = {
//   username: "UnicornDad",
//   password: "abc123",
//   email: "unicorndad8@gmail.com",
//   login: () => console.log("user has logged in successfully"),
// };

// console.log(credentials1.login());
// here we are managing the shape and behavior of an object
// created from the AuthCredentials
class AuthCredentials implements Credentials1 {
  constructor(
    public username: string,
    public password: string,
    public email: string
  ) {}

  login(): void {
    console.log("hello world");
  }
}

const auth = new AuthCredentials("Ceci", "abc1", "cecibot9@gmail.com");
console.log(auth.login());
