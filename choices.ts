// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// Type Aliases & Custom Types
type Role = "admin" | "editor" | "guest";
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = "admin";

// ...

userRole = "guest";

// Literal types
let possibleResults: [1 | -1, number];
possibleResults = [1, -1];

function access(role: Role) {
  // ...
}
