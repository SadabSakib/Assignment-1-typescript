📘 Understanding Differences Between interface and type in TypeScript
If you're diving into TypeScript, you've probably come across both interface and type. At first glance, they seem similar — both let you describe the structure of objects, but under the hood, they have key differences and use-cases.

Let's break it down clearly:

🟢 1. Syntax & Similarity
Both interface and type can be used to describe object shapes:

interface Person {
  name: string;
  age: number;
}

type Animal = {
  name: string;
  age: number;
};

They look almost identical — and for basic cases, they act the same.

🟣 2. Key Differences
| Feature           |   interface                                                                   |  type                                                         

| Extensibility    | Can be extended multiple times with `extends` or by redeclaring the same name | More rigid — can't redeclare; use intersections for extension |
| Merging          | Interfaces with the same name automatically merge                             | Types with the same name cause an error                       |
| Usage Flexibility | Best for object and class shapes                                             | Can describe primitives, unions, intersections, tuples        |


🟠 3. Extending with interface
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Merges into one
const person: Person = { name: "Alice", age: 25 };
This is called declaration merging, and only interfaces allow it.

🟤 5. When to Use What?
Use Case  	Recommended
Defining    object/class shape	interface
Complex     unions/intersections	type
Working     with libraries like React Props	Both are valid, preference-driven


✨ The Power of keyof in TypeScript
Now, let's explore one of TypeScript's hidden gems — the keyof keyword.

🔧 What is keyof?
keyof creates a union of all property keys from a given type or interface.

Example:
interface Product {
  name: string;
  price: number;
  available: boolean;
}

type ProductKeys = keyof Product;
// Equivalent to: "name" | "price" | "available"

🎯 Why is keyof Useful?
It lets you:

✅ Create utility functions that are type-safe
✅ Restrict arguments to existing property names
✅ Write generic, reusable code

🔍 Example in Action
interface User {
  id: number;
  username: string;
  email: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, username: "john", email: "john@example.com" };

const username = getProperty(user, "username"); // returns "john"
// const invalid = getProperty(user, "age"); // ❌ Error: "age" doesn't exist on User
With keyof, TypeScript prevents you from accessing invalid properties at compile-time — boosting your code's safety.

🧩 Quick Recap
✅ Use interface for structured, extendable object shapes
✅ Use type for complex combinations, primitives, or unions
✅ Use keyof to safely reference keys of types and prevent invalid property access

Pro Tip: In modern TypeScript, interface and type can often be used interchangeably for objects — but understanding the differences gives you flexibility and control.


