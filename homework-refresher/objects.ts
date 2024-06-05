// working with objects in typescript
// type Alias "User"
type User = {
  id: string | number;
  name: string;
  age: number;
  isAdmin: boolean;
};

let user: User = {
  id: 1,
  name: "Ceci",
  age: 31,
  isAdmin: true,
};

console.log(user);
