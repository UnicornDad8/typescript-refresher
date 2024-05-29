// interfaces are used more popularly to validate objects
interface Credentials {
  username: string;
  password: string;
  email: string;
  // we can also have return types inside an interface
  login: () => void;
}

let credentials: Credentials = {
  username: "UnicornDad",
  password: "abc123",
  email: "unicorndad8@gmail.com",
  login: () => console.log("user has logged in successfully"),
};

console.log(credentials.login());
