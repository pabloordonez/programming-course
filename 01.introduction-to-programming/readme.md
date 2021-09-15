# 01. Introduction to Programming
In this chapter we'll try to convey the most important aspects and the basis of what programming is. We'll utilize `javascript` as the programming language for this and future chapters, but the basic ideas discussed here should and can be extrapolated to other programming languages.

I always say that if you know how to write recipes, you already know how to program. Well, it's kinda true, if you consider the mathematical and engineering aspects of programming. What does it mean to program? The Webster Dictionary defines programming as... Now seriously. To program is basically to give the computer instructions on what you want the machine to do. Computers are big, fast and complex calculators, that can execute billions of calculations (instructions) per second.


## First Languages
In the beginning, programmers had to learn the machine instruction codes (binary codes) to provide meaningful instructions. Over time, new and more efficient ways of communicating with the machines were invented. At some point,  programmers invented assembler, or the assembly languages, these type of languages were tightly coupled to the machine instructions and provided a simple way of telling a machine what it should do, by providing a series of sequential instructions. Don't worry, we won't study assembler in this chapter, but if you are curious about what assembler looks like, you can think of a recipe that states:

```asm
MOV EAX, [EBX]	  ; Move the 4 bytes in memory at the address contained in EBX into EAX
MOV [ESI+EAX], CL ; Move the contents of CL into the byte at address ESI+EAX
MOV DS, DX        ; Move the contents of DX into segment register DS
```

Assembler allowed programmers to write more complex programs in a language that seemed more human, at least the instruction names were memonic of actual words.

> Note: Most games you played when you were a kid, like NES, SNES, Sega, Gameboy games were completely programmed in assembler.

These assembly programs were a textual representation of machine code. Computer couldn't understand the text instructions, they needed binary numbers, a bunch of 0s and 1s. So programmers invented the concept of a compiler, a tool that translates text instructions into machine code by "compiling" these higher level textual instructions. Originally these compiler programs where simple translators, but with time, they grew in complexity.


## Paradigms
But not only compilers grew in complexity, with every passing year, programmers researched new ways of communicating ideas to a computer, providing more expressive ways for the programmer to instruct the machine. Different schools of though appeared, and different paradigms were born.

Currently there are tens or hundred of paradigms out there, and although is not required to know every one of them, is good to know that they exist. We'll name a few that still important now days:

- `Imperative`: in which the programmer instructs the machine how to change its state.
- `Procedural`: which groups instructions into procedures.
- `Object-oriented`: which groups instructions with the part of the state they operate on.
- `Declarative`: in which the programmer merely declares properties of the desired result, but not how to compute it.
- `Functional`: in which the desired result is declared as the value of a series of function applications.
- `Logic`: in which the desired result is declared as the answer to a question about a system of facts and rules.
- `Mathematical`: in which the desired result is declared as the solution of an optimization problem reactive in which the desired result is declared with data streams and the propagation of change.

Most used and loved programming languages like `javascript`, `c`, `c++`, `c#`, `java`, `rust`, `python`, etc. combine several paradigms. Currently the two more used paradigms are `Object oriented` and `Functional` but still all languages include some type of `Imperative` and `Procedural` ideas. There is always trouble in paradise, and these different schools fought against each other remarking problems and issues. There are defenders and retractors of each paradigm, but in the end, it will depend on what you like more, how good the paradigm let you express your ideas, how easy to maintain it is, how fast the code that produces can run, etc. In my humble opinion, to know more will let you choose the best tool for the job.

## Javascript
Originally, `Javascript` was invented as a simple interpreted language for the web. But gradually with the growth of the world wide web ecosystem, and due to its inner simplicity, it started to grow as one of the most used languages. With time the language started to evolve, and in the past 10 years received a lot of improvements. Currently the language allows to express ideas in a functional way, in an object oriented way, prototypically, procedurally, in a mix of different ideas ans statements.

In this chapter we'll start to learn about the javascript programming language itself, and how we can program, how we can tell our computer to do stuff, by using javascript. It's not important right now for you to understand the nitty-gritty details, but when you run a javascript program, a javascript compiler reads the code, creates an internal representation called abstract syntax tree, and from there translates the code into an intermediate format and then into machine instructions, that are executed by your computer sequentially. Every time you run a javascript program, or a website, this happens behind the scenes.


So, let's go back to the recipes idea. When you write a recipe, you have to declare the ingredients, then do operations, and then expect a result. This is not too different from what program does, or what a mathematical function is for that matter.
Let say we want to create a program to calculate the area of a rectangle. Then, like the recipe example, we need to declare what our ingredients will be: The width and height of the rectangle. Then we need to state the operation to calculate the area with these ingredients, and then we need to present the results. If you know about math and functions, this could be expressed as mathematical function:

```
ƒ(w, h) = w × h      w ∈ R, h ∈ R
```
We are basically saying the function `ƒ(w, h)` takes two real numbers, and returns the product of `w` and `h`. If we calculate `ƒ` for the real numbers `3` and `4`, we'll have `ƒ(3, 4) = 3 × 4` which is `ƒ(3, 4) = 12`.

If we mentioned that a computer is nothing but a big calculator, then my program should be able to produce the same results, with a similar instruction. Let's go ahead a try how we can accomplish this with javascript:

1. Create a new file called `program-01.js`.

2. Now, we need to translate our mathematical function into a way that the javascript compiler understand, and execute the function for the values 4 and 3. As most of the programming languages out there, we should have a simple way of representing this idea. As we'll see in the next part, there is. One of the core concepts in javascript is the concept of `function`. We'll delve deeper later, for now let's copy the following code:
   ```js
   function f(w, h) {
       return w * h;
   }
   ```
   As you can see, even if its strange at first sight, what the text conveys is really similar to the mathematical concept. We are `declaring` a function called `f`. This function takes two arguments (also called parameters) `w` and `h`. Then, we are `returning` the result of the multiplication of w and h. Even if you don't don't feel comfortable enough yet, let this sink in the ideas and continue the instructions.

   In javascript like other languages that came after the `c` programming language, we use curly brackets  `{` and `}` to define a scope or instruction block. It means that everything that we write between `{` and `}` will be part of the function body, the function logic.

3. Ok, we have a function. Now we need to execute it for the values 4 and 3. Copy the following line:
   ```js
   let result = f(3, 4);
   ```
   Look at the code. There are various thing happening here. We are executing the function by calling `f(3, 4)`. In programming terms, `executing` the function is also named `calling`. We `call` a function by stating its name, and then passing the function arguments between parenthesis `(` `)`. The function then executes and returns the result. But in order for us to show the result, we need to do something with it. So, lets save the result of the function into a variable. For now, you can think of a variable as compartment where we can save values and things for later use. So we declare a variable called `result` by typing `let result` and then we assign the result of the function by calling ` = f(3, 4)`. In short, you can read that line as:

   _Execute the function `f` for the values `3` and `4`, and save the result into the variable result_.

4. Now, we executed the function, saved the result in a variable, we need only to show the result to the user to verify that our program is behaving as expected. So, lets do that by calling the native function `console.log(text)`. As you can see, javascript already comes with predefine functions, that we have at our disposal:
   ```js
   console.log(result);
   ```
5. Now we should execute the code and see the result. Open the terminal by clicking `Terminal > New Terminal` and then typing:
   ```shell
   $ node program-01.js
   ```
   If everything went well, you should see an output similar to:
   ```shell
   $ node program-01.js
   12
   ```

<br>
<br>

Perfect! So our first real program executed the code as expected, and gave us the right result. The final code should look something like:
```js
// declare the f function to calculate the rectangle area.
function f(w, h) {
    return w * h;
}

// execute the function for the values 3 and 4 and save the result.
let result = f(3, 4);

// print the result so the client can see the area.
console.log(result);
```



This is nice! Lets calculate more areas now! Create a new file called `program-02.js` and paste the following code:

```js
function f(w, h) {
    return w * h;
}

let result = f(3, 4);
console.log(result);

result = f(5, 6);
console.log(result);

result = f(715, 831);
console.log(result);
```
Now we'll be calculating `3×4`, `5×6` and `715×831`. Let's run the program again by typing `node program-02.js`. After executing the program you should see something like:
```shell
$ node program-02.js
12
30
594165
```
Perfect! the program continues to behave as expected! You can see that we reused the same variable `result`, but in the following instructions we didn't add the `let` at the beginning of the line. This is because the variable was already declared in the context of the program, and javascript knows that the variable already exists.

But look at the code. We are repeating the same code over and over again. If there's something that we programmers hate, is having to do something multiple times. We can take hours to automate a task that manually takes 10 minutes if that saves us from repetition 🤪.

There's a way we can generalize this code. We mentioned that `javascript` it's not only `functional`, is also `procedural`. A procedure, like a recipe, is a list of statements that are executed one after the other in a sequential way.

`javascript` is prepared to write not only `functions`, but also `procedures`. But how? With `functions`! `functions` are also `procedures`! a javascript `function` is not required to return a value, and also can contain as many lines and logic as we want. So, in the previous code, what if we do another function that executes f and then prints the code? that will simplify the code we are writing, and reduce the number of lines in the long run.
Lets rewrite our code:

```js
function f(w, h) {
    return w * h;
}

function printArea(w, h) {
    let result = f(w, h);
    console.log(result);
}

printArea(3, 4);
printArea(5, 6);
printArea(715, 831);
```

As we can see, we created a new `function` called `printArea`. This function takes two arguments, `w` and `h`, then declares a variable, executes the function, stores the result into our variable, and then prints the result. After that, we are just calling `printArea` several times to print the area.

Now that we moved the code inside the variable, one thing that may not be obvious to an untrained eye, is that the variable declaration was moved also into the function. That variable exists now only inside the function. Remember what we mentioned about the curly brackets? Whatever code is declared between the curly brackets is now part of the function. What if we try to add the following line after the last `printArea` call?

```js
printArea(3, 4);
printArea(5, 6);
printArea(715, 831);
console.log(result); // what will happen??
```

Try to modify the code and execute again by typing `node program-02.js`. You should see something like:

```shell
$ node program-02.js
12
30
594165
$ /programming-course/01.introduction-to-programming/program-02.js:13
console.log(result);
            ^

ReferenceError: result is not defined
    at Object.<anonymous> (/programming-course/01.introduction-to-programming/program-02.js:13:13)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
```

As you can see, the program failed to execute, giving us a hint of what failed. It says _"result is not defined"_. This is completely correct, because the variable `result` only exists in the context of the function, and we are calling to the `console.log(...)` outside the context of the function: the scope of the function.

This is an important concept in programming. In general, whenever we execute code, that code is subject to the execution context. This can produce several errors or problems if we don't understand the effects.

Functions act like small sub programs. You are encouraged to create as many functions as you see fit. Separating code into functions, instead of repeating yourself, it's considered a good practice. Having lots of small simpler functions is always better than having less complex functions. But try to name your functions in a way that make sense, to avoid having a mess of a code base.

Now that you saw what programming is, lets dive deeper and learn some core concepts. These are general programming concepts that will be valid in most programming languages, so don't fixate these ideas to javascript, these are common constructs that you'll find in most languages.

## Variables
You can think of a variable like an abstract box, where you can store values, objects, even functions (at least the function address, we'll see this later). Sometimes when doing complex logic, you need to save a value for later use. Variables will help you store the value inside a given context or scope, until you require it again. Sometimes it's also helpful to name values, or make shortcuts. Think as an example the number `PI`, it's globally known as `PI`, and it's much easier than write `3.14159265359`. Variables let you store the value for later use:

```js
let pi = 3.14159265359;

console.log(pi); // will print 3.14159265359
```

So in the general sense, variables can be written to and read from. In the previous example, we are storing or writing the value `3.14159265359` inside the variable `PI` and then we read that value from pi to print it into the screen.

You can also store intermediate operations:
```js
let width = 10;
let depth = 5;
let height = 20;
let area = width * depth;    // area will be 50
let volume = area * height;  // volume will be 1000

console.log(volume); // will print 1000
```

Same concept here, we are writing and reading from the variables. You can create as many variables as needed. Obviously, there are some limits, it will depend on the amount of physical memory the computer has, and the memory that the OS shares with the application.

### Mutable and Immutable Variables
When creating variables, some time we prefer the variable to stay unchanged. In the `PI` example, we want to store the value of `PI` but we don't want random programmers overriding the value of `PI` later on, or the fabric of the universe could collapse on itself. Thankfully, there are ways for us to instruct the program to limit the mutability of a variable.

We've been declaring variables using the `let` keyword, but there's other world that can be used to declare variables, and it's `const`. So, let's create a new file called `program-03.js` and add the following code, and the run it with node.

```js
let mutable = 1;
mutable = 2;

const immutable = 1;
immutable = 2;

console.log(mutable);
console.log(immutable);
```

If you were able to create the file and run it, you should see something like:

```shell
/programming-course/01.introduction-to-programming/program-03.js:5
immutable = 2;
          ^
TypeError: Assignment to constant variable.
    at Object.<anonymous> (/programming-course/01.introduction-to-programming/program-03.js:5:11)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1072:14)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:937:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:778:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m
```

The error is telling us that we tried to modified a const variable, and as such, a const variable can't be updated.

As a rule of thumb, try to declare everything as const unless you know that you need to modify it. You won't probably fully understand the reason right now, but let say that this can help you avoiding undesired changes, and will make your code more performant. There are certain optimizations that can be made only if the data is constant.

> Note: There's a entire school of thought about why programs should be immutable by default. Rust is immutable unless you state the contrary, and the state management is more secure and stable thanks to that decision.

## Types
So far we saw how to declare variables and simple functions, but we didn't specify the type of the variable. In programming, you will need more than numbers, even if in the end everything is translated to numbers, we should be able to express other ideas like text messages, true or false statements, or more complex objects.

Is the variable box able to store any type of data? Can we limit the box to store only one type? is expected? is desired?

In javascript, the short answer is no, we can't limit a variable to a type, but this is not true for other languages like c, c++, c#, java, rust and may more. Javascript will let you change the variable type as you see fit. This makes the code simpler to write, but also hard to follow, or to expect what should happen. But forget about that for a minute, let's play with other types of variables. Create a new file called `program-04.js`:

```js
function checkTypeAndValue(variable) {
    console.log(`the variable type is '${typeof variable}' and its value is '${variable}'`);
}

checkTypeAndValue(10);                  // integer number
checkTypeAndValue(3.1415);              // floating-point number
checkTypeAndValue(true);                // boolean
checkTypeAndValue("Hello World");       // string literal
checkTypeAndValue(new Date());          // Date object
checkTypeAndValue([]);                  // array
checkTypeAndValue({});                  // object
checkTypeAndValue(function () {});      // function
```

If you run the program, the output is:

```shell
$ node src/program-04.js
the variable type is 'number' and its value is '10'
the variable type is 'number' and its value is '3.1415'
the variable type is 'boolean' and its value is 'true'
the variable type is 'string' and its value is 'Hello World'
the variable type is 'object' and its value is 'Wed Sep 15 2021 11:58:52 GMT-0300 (hora estándar de Argentina)'
the variable type is 'object' and its value is ''
the variable type is 'object' and its value is '[object Object]'
the variable type is 'function' and its value is 'function () {}'
```

So, even if you don't provide a type explicitly, javascript can detect the type of data by using the reserved keyword `typeof`: `typeof variableName` will return a string with the type name:
 - `"number"` : Number encloses all type of numbers, both integers and [floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic).
 - `"boolean"`: Boolean values can be either true or false.
 - `"string"`: Strings are basically a chain of characters, used to represent text.
 - `"object"`: Most types in javascript are treated as objects, arrays included.
 - `"function"`: A function is also a type of content.

> Exercise: You can also investigate what happens with pathological values like `null`, `undefined`, `NaN` and `Infinity`.

### Summary
- We can read and write to variables.
- We can have mutable and immutable variables.
- Variables can hold different value types, and we can change that at runtime.
- We can detect the inner type by using the keyword `typeof`.

## Control Flow Statements
To make any program interesting, we need some type of decision making structure, some type of evaluation and automation. What if we want to make a program that detect odd numbers, or if we need to validate that a string size is not empty? Or what if I want to repeat a task a variable amount of times? There's an answer to all these questions, and we'll review each one of these control statements in this chapter.

### if / if-else / ternary operator
The first statement that anyone learns when learning programming is the `if statement`. The if statement allow us to check certain conditions, and act upon the results of the check:

```js
if (condition) {
    // do something here
}
```
If the condition is acceptable, then the code between the curly brackets will be executed, if the condition is not, then the code won't be executed. Let's create a new fule called `program-05.js` and start adding some tests:

```js
const number = 5;

if (number > 10) {
    console.log("Number is greater than 5");
}

if (number < 10) {
    console.log("Number is less than 10");
}
```

After running the code, we got something like:

```shell
$ node ./program-05.js
Number is less than 10
```

So the first if concluded that the condition wasn't acceptable, and ignored the code between brackets. On the other hand, the second if statement evaluated the condition to be truthful, and executed the code between brackets.

The if evaluates if the condition is not `falsy`, and acts accordingly. Most newer languages ask for boolean conditions, the condition must be a boolean expression. In the case of `javascript` the laguage checks for several things:
- If the value it's a `boolean`, it must be true to execute.
- If the value it's a `number`, it must be different than 0.
- If the value it's a `string`, the string must exists and not be an empty string.
- If it's not one of the above, the variable must be different from `null` or `undefined`.

So, when you check for a condition, you need to understand this logic well if you want to provide a clear conditional for the if to work. As we'll see later, this conditional logic is also valid for other statements.

> Note: You can see that the `if` uses curly brackets to define the section that will be executed. This section is a scope like the one inside functions, and the same warnings can be applied here: If you define a variable inside an `if` statement, that variable will only exist inside the if.

Having to write two `if` to evaluate opposing conditions can be cumbersome, so the language designers thought about this, and created a contextual statement to handle what needs to happen if the condition is not approved. This is called the `else` branch. Let's rewrite the previous example using `else` instead:

```js
const number = 5;

if (number > 10) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is less than 10");
}
```

This is much more ergonomic way to execute the `if`. The result is exactly the same. The else code will only execute if the condition is not met, and the if block will be executed if the condition is met.

If you have multiple conditions, there's a third way of writing an if:

```js
if (condition1) {

} else if (condition2) {

} else if (conditionN) {

} else {

}
```

In this case you can check multiple conditions and then do something else if no condition is met.

There's another if called the ternary operator, and it's perfect when you need to decide if you assign a value or another:

```js

// instead of writing this code:
let value;

if (condition)
    value = value1;
else
    value = value2;

// you can simplify with this version:
const value = (condition)? value1: value2;
```


### switch
Sometimes you need to check if a value is one of an enumeration of different possible values, using a `else-if` can be really cumbersome and produces a lot of undesired code. There's a statement that was created to solve this kind of issues, called switch. The switch contains an expression, and then a set of arms with possible values for the variable, if a match is found, then that arm will be executed, if no arm is matched, then the switch will look for a default statement if any. Let's create a new ile called `program-06.js` and paste the following code:

```js
const value = 3;

switch (value)
{
    case 1:
        console.log("First case");
        break;

    case 2:
        console.log("Second case");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Third, Fourth or Fifth case");
        break;

    default:
        console.log("None of the above");
        break;
}
```

If we run the code, we should se the following output:

```shell
$ node src/program-06
Third, Fourth or Fifth case
```

The switch evaluated every arm until a valid match was discovered. In this case, 3, 4 and 5 execute the same code.

> Note: The switch has only one scope block, so if you declare something inside the switch, it will exists inside all the other arms. This is problematic because if you declare and initialize a variable in one arm, that variable will be in scope for the rest of the arms, but not initialized. As a rule of thumb, don't create variables inside a switch, or use specific names to avoid collision.


### while / do-while

### for

### for of

### for in

## Advanced Types

### Objects

### Arrays

### Stacks

### Queue

### Dictionaries / Hash maps

### Functions

## Memory and Addresses
Every computer needs some type of memory storage, to store first the programs to run, and then some contextual running values. Think of your Operating System. Your OS it's made of a kernel and a series of satellite programs, that take memory space, and when you run them, they'll need even more space to store contextual values like the current date, the peripherals status, the video memory, etc.

> You can think of a computer as a human brain. Part of the activity of a brain involves executing pattern recognition "programs", but the brain also needs long term and short term memory to be more efficient. There is a similar concept in computer architecture, you have the RAM memory, and you have the hard disks. One is ephemeral, the latter stores information even if no energy is provided.

A program is nothing else that a list of machine instructions one next to the other in binary format, with a logic structure similar to the assembly example we saw earlier. When you execute a program, that code is read from the hard disk and moved to RAM, and from the to the CPU Cache, to start the reading and execution program. The CPU reads various instructions from the app, and executes each one individually and sequentially.

So, a program is nothing but a list of instructions flowing on after the other:
```
    0xF00000         0xF10000            0xF2000
----+----------------+-------------------+------------+----
 ...| MOV EAX, [EBX] | MOV [ESI+EAX], CL | MOV DS, DX |...
----+----------------+-------------------+------------+----
    Î
    Reading Cursor
```

And each instruction is stored in a given memory address. You can think of an address like the amount of bytes since the begining of the memory, where the instruction is located, it's like saying it's stored 2 meters from the floor, same concept.

But I digress. The memory layout for variables is similar to the layout for programs, when an application executes, the operating system shares part of the RAM memory space with the application, and this memory gets split into sections. Part of the space is utilized to store the program itself, the instructions. Part of that space is used for global constants, values that are known at compile time, like strings, or constant numerical values. Then we have the stack, a special place where the application stores and overwrites values in a matter similar to stack structure (We'll discuss more about the data structure and the actual stack later on). Then you have what it's called the heap. In the heap, the application stores dynamic memory, this part is where the application requests memory allocations for bigger objects, and this part is normally thought as dynamic.

When you write to variables, what you are actually doing is to write and read from one of these sectors, either the stack or the heap. So the variable is truly a memory address which you name with a memonic value that is more significant for you than an actual address. We could think the previous program as:

```js
let memory[0x0100] = 10;
let memory[0x0200] = 5;
let memory[0x0400] = 20;
let memory[0x0800] = memory[0x0100] * memory[0x0200];    // area will be 50
let memory[0x1000] = memory[0x0800] * memory[0x0400];    // volume will be 1000

console.log(memory[0x1000]); // will print 1000
```

> Note: Depending on the type of language you use (interpreted, natively compiled, intermediate compiled, running inside a vm, etc) the memory used may differ. Also, CPUs have special places to store temporal values called registers, and some times if the value is ephemeral, it may end up using only register and not actually written or read from memory.


### Values and References


