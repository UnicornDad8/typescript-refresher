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
