// functions can infer the return type so we commented out
function prod(a: number, b: number) /*: number*/ {
  return a * b;
}

console.log(prod(2, 3));

// functions without a return type have the "void" return type
// example

function greeting(message: string): void {
  console.log(message);
}

greeting("Hello fren");

// defining function types
function calculateTax(
  income: number,
  percentage: number,
  calc: (income: number, percentage: number) => number
) {
  return calc(income, percentage);
}

console.log(calculateTax(1000, 0.3, prod));
