// HTMLElement: generic, not specific type. So it needs type casting (as).
const inputEl = document.getElementById("user-name") as HTMLInputElement | null;

// if (!inputEl) {
//   throw new Error("Element not found!");
// }

console.log(inputEl?.value);
