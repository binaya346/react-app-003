# 1. Definition and Role of Execution Context
Think of an Execution Context as a box that contains everything the engine needs to run the current piece of code:

**The Variable Environment:** Where var, let, const, and function declarations live.
**The Scope Chain:** References to variables outside the current context.
**The this keyword:** A reference to the object calling the function.

# 2. The Two Primary Types of Context
**A. Global Execution Context (GEC)**
**When it's created:** As soon as the JS file loads.
**Count:** There is always exactly one GEC.
**What it does:** It creates the Global Object (window in browsers, global in Node.js) and sets the this keyword to point to that global object.

**B. Function Execution Context (FEC)**
**When it's created:** Every time a function is invoked (called), not when it's defined.
**Count:** Can be many. Each function call gets its own brand-new context.
**What it does:** It manages the function's local variables and arguments.

# 3. The Two Phases of Execution
V8 processes every execution context in two distinct stages. This is why JavaScript behaves the way it does.

## Phase 1: Creation Phase (Memory Allocation)
The engine scans the code inside the context before executing any line.
1. Creation of the Global Object (if GEC).
2. Creation of this binding.
3. Hoisting: * Functions: Stored in memory with a pointer to the entire function body.
    **Variables:** var is stored and initialized as undefined. let and const are stored but not initialized (placing them in the Temporal Dead Zone).

## Phase 2: Execution Phase (Code Running)
The engine goes through the code line-by-line.
1. Assigns values to variables.
2. Executes function calls.

# 4. The Execution Stack (Call Stack)
The Execution Stack (also known as the Call Stack) is a LIFO (Last In, First Out) structure used to manage execution contexts.

1. When the script starts, the GEC is pushed to the bottom of the stack.
2. When a function is called, its FEC is pushed on top.
3. When the function finishes, its FEC is popped off the stack, and control returns to the context below it.

# 5. The Scope Chain
Each Execution Context has a link to its **outer environment**. If the engine can’t find a variable inside the current context's Variable Environment, it looks at the "Outer" context. This continues until it hits the Global Execution Context.

**Scope Chain =** Current Variables + Parent Scope Chain.

This is Lexical Scoping: The scope is determined by where the function was written in the code, not where it was called.

```bash
var myName = "John";

function first() {
  var age = 30;
  if (age > 20) {
    var status = "Adult"; // Hoisted to function scope
  }
  second();
  console.log(myName + " is an " + status);
}

function second() {
  console.log("Inside second function");
}

first();
```

## Technical Walkthrough:

1. GEC Created: `myName` (undefined), `first` (fn), `second` (fn) stored.
2. Execution starts: `myName` becomes "John".
3. `first()` called: New FEC pushed to Stack.`age` (undefined), `status` (undefined) stored.
4. `second()` called: New FEC pushed to Stack.
5. `second()` finishes: Popped from Stack.
6. `first()` finishes: Popped from Stack.

