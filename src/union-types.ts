let id: string | number = "abc1";

id = 123; // this line doesn't throw an error

// because we are using an Union type that can be either:
// a string "abc1" or a number "123"

// like in line 3 the inferred type most be number

// uncomment the line below this one to see the error
// id = true; // this line throws a type-checking error

// id can't be of type boolean
