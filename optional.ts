function generateError(msg?: string) {
  throw new Error(msg);
}

generateError("An error occurred!");

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

// Nullish Coalescing : Check whether its left-hand is null or undefined.
let input = null;
const didProvideInput = input ?? false;
