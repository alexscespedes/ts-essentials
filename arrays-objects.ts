let hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];

// Generics type
let users: Array<string | number>;

users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];

// Tuples: Fixed-length arrays
let possibleResults: [number, number];

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: {
    description: "manager",
    id: 5,
  },
};

// Any value that's not undefined or null.
let val: {} = "is a value";

// Record types: Objects with explicit types

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: "some string",
};
