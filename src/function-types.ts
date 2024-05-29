// functions can infer the return type so we commented out
function add(a: number, b: number) /*: number*/ {
  return a + b;
}

console.log(add(2, 3));

// functions without a return type have the "void" return type
// example

function greeting(message: string): void {
  console.log(message);
}

greeting("Hello fren");
