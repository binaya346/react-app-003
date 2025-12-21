# How JavaScript engines work (e.g., V8 engine)

## 1. The Parser & The AST (The "Understanding" Phase)
Before the engine can run code, it has to make sense of the grammar.

**Lexical Analysis:** The engine breaks the code into Tokens (e.g., the word function, the variable name, the = sign).

**The Parser:** It takes these tokens and builds an Abstract Syntax Tree (AST).

**Why it matters:** The AST is a tree-like structure that represents the relationship between parts of your code. If you forget a closing bracket }, the Parser fails here and throws a "Syntax Error" before a single line of code even runs.

## 2. Ignition: The Interpreter (The "Fast Start" Phase)
V8 doesn't want to wait to compile everything perfectly before starting. It wants to run code immediately.

Bytecode Generation: Ignition takes the AST and converts it into Bytecode.

**The Role:** Bytecode is an intermediate language (simpler than JS, but not as complex as Machine Code). Ignition executes this bytecode line-by-line.

**The Benefit:** This allows the application to start up instantly. However, bytecode isn't the fastest way to run code long-term.

## 3. TurboFan: The JIT Compiler (The "Optimization" Phase)**
While Ignition is running the bytecode, a "Profiler" watches the code.

**Identifying "Hot" Code:** If a specific function is called 1,000 times (like a loop or a math calculation), the engine marks it as Hot.

**Speculative Optimization:** TurboFan takes that "Hot" code and re-compiles it directly into Highly Optimized Machine Code (Binary).

**The Result:** The next time that function runs, the engine skips the interpreter entirely and runs the binary version directly on the CPU. This is why JS is incredibly fast for heavy logic.

## 4. De-optimization (The "Safety Catch")
JavaScript is dynamically typed (variables can change from a number to a string). This is a nightmare for a compiler.

**The Scenario:** If TurboFan optimized a function assuming the input is always a Number, but suddenly you pass a String, the optimized code will crash.

**The Solution:** V8 performs De-optimization. It throws away the optimized machine code and falls back to the Ignition interpreter to handle the change safely.

## 5. Memory Management: The Heap vs. The Stack
While V8 parses and compiles code, it must decide where to store the data. It uses two distinct structures:

**A. The Memory Stack (Static Allocation)**
The Stack is used for static data, data where the engine knows exactly how much memory it needs before it even runs the code.

**What goes here:** Primitive values (numbers, strings, booleans, null, undefined) and Execution Contexts.

**How it works:** It follows "Last In, First Out" (LIFO). When a function finishes, its entire block on the stack is "popped" and the memory is reclaimed instantly.

**Speed:** Extremely fast access.

**B. The Memory Heap (Dynamic Allocation)**
The Heap is a large, mostly unstructured memory region used for Objects and Arrays.

**What goes here:** Anything that can grow in size or doesn't have a fixed size (Objects, Arrays, Functions).

**How it works:** V8 doesn't allocate a fixed amount of space. It finds a big enough "hole" in the heap to fit the object.

**The Reference:** The actual object stays in the Heap, but its Address (Reference) is stored in the Stack.

## 6. Garbage Collection (The Orinoco Project)
Since the Heap is unstructured, V8 needs a way to clean it up so the server doesn't run out of RAM. This is handled by the Garbage Collector (GC).

**Mark and Sweep Algorithm:**

**Mark:** The GC starts from the "roots" (Global Object) and identifies every object that is still reachable in the code.

**Sweep:** It scans the Heap and removes any object that was not marked.

**Generational Collection:**

**Young Generation:** Where new objects live. GC happens here frequently because most objects die young.

**Old Generation:** If an object survives multiple GC cycles, it’s moved here. GC happens here less often because it's more "expensive" (takes more CPU).

## 7. Putting it All Together: The Full V8 Lifecycle

1. **Source Code** enters the engine.
2. **Parser** creates the **AST**.
3. **Ignition (Interpreter)** creates **Bytecode** and begins execution.
4. **Memory Allocation:** * Primitives and Function Calls are pushed to the **Stack**.
5. Objects/Arrays are stored in the **Heap**, with pointers stored on the **Stack**.
6. **TurboFan (JIT)** monitors for "Hot Code" and optimizes it into **Machine Code.**
7. **Garbage Collector** monitors the **Heap** to delete unreferenced objects