# Variable, Datatype & operators.
## Variables: var, let, and const
JavaScript variables differ primarily in scope, hoisting, and reassignment capabilities.
**var (Function Scoped)**
**Hoisting:** The declaration is moved to the top of the function. If you access it before declaration, it returns undefined.

```bash
javascript console.log(user); // Output: undefined var user = "Alice"; var user = "Bob"; // No error, redeclaration allowed
```

**let (Block Scoped)**
Temporal Dead Zone (TDZ): While hoisted, the variable is uninitialized. Accessing it before the `let` line results in a `ReferenceError`.

```bash
{
  function letExample() {
  // console.log(studyTime); // ReferenceError: Cannot access before initialization
  let studyTime = "2 Hours";
  
  if (true) {
    let topic = "JavaScript";
    console.log(topic); // "JavaScript"
  }
  // console.log(topic); // ReferenceError: topic is not defined (kept inside the block)
}

const API_KEY = "XYZ123";
// API_KEY = "ABC"; // TypeError: Assignment to constant variable
}
```

**const (Block Scoped & Immutable Binding)**
**Binding:** You cannot change what the variable points to, but if it points to an object, you can change the object's contents.

```bash
const colors = ["red"];
colors.push("blue"); // Works! The array content changed.
// colors = ["green"]; // TypeError: Assignment to constant variable.
```

## Data Types: Stack vs. Heap
**Primitive Types (Deep Copy by Value)** Stored in the Call Stack. When you copy a primitive, you create a real clone of the value.

- String: let name = "JS";
- Number: let age = 25; (Internal 64-bit float).
- BigInt: let huge = 9007199254740991n; (For values larger than $2^{53} - 1$).
- Boolean: let isTrue = true;
- Undefined: A variable that exists but has no value yet.
- Null: Explicitly "nothing.
- "Symbol: Used for unique object keys.
```bash
let scoreA = 100;
let scoreB = scoreA; // A new copy of 100 is created for scoreB

scoreB = 50; 

console.log(scoreA); // 100 (remains unchanged)
console.log(scoreB); // 50
```

**Non-Primitive Types (Reference Types)** Stored in the Memory Heap. The variable in the stack only holds a "pointer" to the heap.

- Object: let car = { brand: "Tesla" };
- Array: let scores = [90, 85];
- Function: function greet() {}
- Behavior: If objA is assigned to objB, changing objB also changes objA because they point to the same memory address.

```bash
let studentA = { name: "John", grade: "A" };
let studentB = studentA; // Both point to the same memory address

studentB.grade = "F"; // Modifying studentB affects the shared heap data

console.log(studentA.grade); // "F" (Changed!)
console.log(studentB.grade); // "F"
```

## Type Coercion: The "Why" behind the "How"
**Implicit Coercion (Engine-driven)** This happens when the engine tries to make sense of operations between mismatched types.

- The Plus Operator (+): If any side is a string, it converts the other side to a string and concatenates. `"User ID: " + 101 // "User ID: 101"`
- *Other Math Operators (-, , /): These convert strings to numbers. `"10" * 2 // 20`
- Equality: Using `==` triggers coercion. `false == 0 // true` (Both coerced to 0)

**Explicit Coercion (Developer-driven)** This is the "clean" way to write code so other developers understand your intent.

```bash
let input = "42";
let converted = Number(input); // Explicitly making it a number
let backToString = String(converted); // Explicitly making it a string
```

## Operators: Evaluation Logic
Strict vs. Abstract Equality

- Abstract (`==`): Only check if the "meaning" is the same after coercion.
- Strict (`===`): Checks both Value and Type. Always use this to avoid bugs.

```bash
0 == false;   // true (coerced)
0 === false;  // false (Number is not Boolean)

null == undefined;  // true
null === undefined; // false
```

**Logical Short-Circuiting** This is a powerful technique where the engine stops evaluating as soon as it finds the result.

- **OR** (`||`): Returns the first "Truthy" value. Used for setting defaults. `let theme = userPref || "dark-mode";`
- **AND** (`&&`): Returns the first "Falsy" value. Used for conditional execution. `isLoggedIn && displayDashboard();` (If not logged in, the function never runs).
- **Nullish Coalescing** (`??`): Only triggers for `null` or `undefined`. This is safer than `||` if `0` or `""` are valid inputs.

```bash
let score = 0;
let result1 = score || 10; // 10 (because 0 is falsy)
let result2 = score ?? 10; // 0 (because 0 is NOT null/undefined)
```

