// Literal types
type Role = "admin" | "user" | "editor";
let role: Role;

role = "admin";
role = "user";
role = "editor";
// role = "abc";

// Adding type guards
function performAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

// Generic types
let roles: Array<Role>;
roles = ["admin", "editor"];

type UserRole = {
  id: string | number;
  name: string;
  age: number;
  isAdmin: boolean;
  role: Role;
};

type DataStorage<T> = {
  storage: T[];
  someMethod: (data: T) => void;
};

const userStorage: DataStorage<UserRole> = {
  storage: [],
  someMethod(data) {
    this.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge({ name: "Unicorn" }, { age: 16 });
console.log(newUser);
