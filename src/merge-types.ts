// You can merge types or interfaces
// with types
type Admin1 = {
  permissions: string[];
};

type RegularUser1 = {
  username: string;
};

type MergedAdmin1 = Admin1 & RegularUser1;

let admin1: MergedAdmin1 = {
  permissions: ["login"],
  username: "UnicornDad",
};

// ----------------------------------------------------------------
// now using interfaces
interface Admin2 {
  permissions: string[];
}

interface RegularUser2 {
  username: string;
}

interface MergedAdmin2 extends Admin2, RegularUser2 {}

let admin2: MergedAdmin2 = {
  permissions: ["login"],
  username: "UnicornDad",
};
