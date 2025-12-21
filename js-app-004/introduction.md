# 1. The Core Paradox: Single-Threaded but Fast
**Definition:** JavaScript is a Single-Threaded language. This means it has one Call Stack and can only do one thing at a time. It executes code line-by-line (Synchronously).

**The Problem:** If the thread is busy calculating a heavy mathematical equation or waiting for a Database response, the entire application "freezes." This is called Blocking.

**The Solution:** JavaScript offloads heavy tasks to the Environment (Browser or Node.js) to keep the main thread free. This is Non-Blocking I/O.

# 2. The Architecture Components
To understand how JS handles multiple tasks, we must look at the Concurrency Model:

## A. The Call Stack (The "Now")
=> Part of the V8 Engine.
=> Tracks where we are in the program.
=> Functions are pushed in when called and popped out when they return.

## B. Web APIs / Node APIs (The "External Workers")
=> These are NOT part of the JS engine. They are provided by the environment (Browser/Node).
=> They handle things like setTimeout, fetch() requests, or File System (fs) operations.
=> When you call a timer, JS sends it here and immediately moves to the next line of code.

## C. Callback Queue / Task Queue (The "Waiting Room")
=> Once a Web API finished its job (e.g., the 5 seconds are up), the Callback Function is sent to this queue.
=> It sits here until the Call Stack is completely empty.

## D. The Event Loop (The "Gatekeeper")
=> The Event Loop has one job: It constantly monitors the Call Stack and the Callback Queue.
=> If the Call Stack is empty, it takes the first function from the Queue and pushes it onto the Stack for execution.

# 3. Why Node.js is Asynchronous & Non-Blocking
In the MERN stack, Node.js uses Libuv (a C++ library) to handle the "Asynchronous" part.

**The Request:** A request comes in to read a file from the database.
**The Offload:** Node.js doesn't wait. It hands the request to the OS/Thread Pool (Non-blocking).
**The Continuation:** The main thread stays free to take more requests.
**The Callback:** When the file is ready, the callback is placed in the queue.
**The Completion:** The Event Loop pushes the callback to the stack, and the data is sent to the user.

**Technical Note:** This is why Node.js is great for I/O intensive tasks (like Chat apps or Streaming) but poor for CPU intensive tasks (like Video Encoding), because CPU tasks "block" the single thread.

# 4. Code Execution Trace
```bash
console.log("Start");

setTimeout(() => {
    console.log("Callback inside Timer");
}, 0);

console.log("End");
```

## What happens inside the engine:

1. `console.log("Start")` enters the **Stack**, prints, and leaves.
2. `setTimeout` enters the Stack. Because it's a Web API, JS offloads the timer and `pop`s the function immediately.
3. `console.log("End")` enters the Stack, prints, and leaves.
4. **The Stack is now empty.**
5. The Timer (0ms) finishes immediately, and the callback enters the **Callback Queue**.
6. The **Event Loop** sees the Stack is empty, grabs the callback, and pushes it to the **Stack**.
7. `console.log("Callback inside Timer")` prints.
