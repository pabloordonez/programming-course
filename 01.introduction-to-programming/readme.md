# 01. Introduction to Programming
In this chapter we'll try to convey the most important aspects and the basis of what programming is. We'll utilize `javascript` as the programming language for this and future chapters, but the basic ideas discussed here should be extrapolated to other programming languages.

I always say that if you know how to write recipes, you know how to program. Well, it's kinda true, if you consider the mathematical and engineering aspects of programming. What it means to program? The Webster Dictionary defines program as... Now seriously. To program is basically to give the computer instructions on what you want the machine to do. Computers are big, fast and complex calculators,  that can execute billions of calculations (instructions) per second.


## First Languages
In the beginning, programmers had to know the machine language to provide meaningful instructions, but with time, new and more efficient ways of communicating with the machines were invented. First programmers invented assembler, these type of languages were tightly coupled to the machine instructions and provided a simple way of telling a machine what it should do, by providing a series of sequential instructions. Don't worry, we won't study assembler in this chapter, but if you are curious about what assembler is all about, you can think of a recipe that states:

````
1. First, Read a value from this sector in memory.
2. Now put this value in this register
3. Now add the number 4 to the register
4. Check if the value after the addition is different than 0
5. Now jump to the line 1.
````

If you are wondering how assembly looks like, here, take a look:

```asm
MOV EAX, [EBX]	  ; Move the 4 bytes in memory at the address contained in EBX into EAX
MOV [ESI+EAX], CL ; Move the contents of CL into the byte at address ESI+EAX
MOV DS, DX        ; Move the contents of DX into segment register DS
```

Assembler allowed programmers to write more complex programs in a language that seemed more human, at least the instruction names were memonic of actual words.

This assembly program was a textual representation of machine code, but still text. A computer can't understand text, it needs to be provided with binary numbers, a bunch of 0s and 1s. So programmed invented the concept of a compiler, a tool that translated the assembler instructions into machine code by "compiling" this instructions. Originally this programs where simple translators, but with time, they started growing in complexity.


## Paradigms
With every passing year programmers researched new ways of communicating ideas to a computer that were more human, providing more expressivity to the programmer. So different school of though appeared, and different paradigms were born.

Currently there are tens or hundred of paradigms out there, and although is not required that you know everyone of them, is good for you to know they exists. We'll name a few:

- `Imperative`: in which the programmer instructs the machine how to change its state.
- `Procedural`: which groups instructions into procedures.
- `Object-oriented`: which groups instructions with the part of the state they operate on.
- `Declarative`: in which the programmer merely declares properties of the desired result, but not how to compute it.
- `Functional`: in which the desired result is declared as the value of a series of function applications.
- `Logic`: in which the desired result is declared as the answer to a question about a system of facts and rules.
- `Mathematical`: in which the desired result is declared as the solution of an optimization problem reactive in which the desired result is declared with data streams and the propagation of change.

Most used and loved programming languages like javascript, c, c++, c#, java, rust, python, combine several paradigms into itself. Currently the two more used paradigms are Object oriented and Functional. There's always trouble in paradise, and different schools fight against the other throwing critics or problems. In the end, it will depend on what you like more, how good the paradigm let the programmer express the ideas, how easy to maintain is, how fast the code that produces can run, etc. In my humble opinion, to know more will let you choose the best tool for the job.

## Javascript
Originally, `Javascript` was invented as a simple interpreted language for the web. But gradually with the growth of the world wide web ecosystem, and due to its inner simplicity, it started to grow as one of the most used languages. With time the language started to evolve, and in the past 10 years received a lot of improvements. Currently the language allows to express ideas in a functional way, in an object oriented way, prototypically, procedurally, in a mix of different ideas ans statements.

In this chapter we'll start to learn about the programming language itself, and how we can program, how we can tell our computer to do stuff, by using javascript. Is not important right now for you to understand the nitty-gritty details, but when you run a javascript program, a javascript compiler reads the code, creates an internal representation called abstract syntax tree, and from there translates the code into an intermediate format and then into machine instructions, that are executed by your computer. Every time you run a javascript program, or a website, this is happening behind the scenes.


So, let's go back to the recipes idea. When you write a recipe, you have to declare the ingredients, then do operations, and then expect a result. This is not too different from what program does, or what a mathematical function is for that matter.
Let say we want to create a program to calculate the area of a rectangle. Then, like the recipe example, we need to declare what our ingredients will be: The width and height of the rectangle. Then we need to state the operation to calculate the area with these ingredients, and then we need to present the results. If you know about math and functions, this could be expressed as mathematical function:

```
ƒ(w, h) = w × h      w ∈ R, h ∈ R
```
We are basically saying the function `ƒ(w, h)` takes two real numbers, and returns the product of `w` and `h`. If we calculate `ƒ` for the real numbers `3` and `4`, we'll have `ƒ(3, 4) = 3 × 4` which is `ƒ(3, 4) = 12`.

If we mentioned that a computer is nothing but a big calculator, then my program should be able to produce the same results, with a similar instruction. Let's go ahead a try how we can accomplish this with javascript:

1. Create a new file called `first-program.js`.

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
   $ node first-program.js
   ```
   If everything went well, you should see an output similar to:
   ```shell
   $ node first-program.js
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



This is nice! Lets calculate more areas now! Create a new file called `second-program.js` and paste the following code:

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
Now we'll be calculating `3×4`, `5×6` and `715×831`. Let's run the program again by typing `node second-program.js`. After executing the program you should see something like:
```shell
$ node second-program.js
12
30
594165
```
Perfect! the program continues to behave as expected! You can see that we reused the same variable `result`, but in the following instructions we didn't add the `let` at the beginning of the line. This is because the variable was already declared in the context of the program, and javascript knows that the variable already exists.

But look at the code. We are repeating the same code over and over again. If there's something that we programmers hate, is having to do something multiple times. We can take hours to automate a task that manually takes 10 minutes if that saves us from repetition 🤪.

There's a way we can generalize this code. We mentioned that `javascript` it's not only `functional`, is also `procedural`. This means that in `javascript`, we can not only write `functions`, but `procedures`. In `javascript` functions are also `procedures`, a javascript `function` is not required to return a value, and also can contain as many lines and logic as we want. So, in the previous code, what if we do another function that executes f and then prints the code? that will simplify the code we are writing, and reduce the number of lines in the long run.
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

Now that we moved the code inside the variable, one thing that not may obvious to an untrained eye, is that the variable declaration was moved also to the function. That variable exists now only inside the function. Remember what we mentioned about the curly brackets? Whatever is declared between the curly brackets is now part of the function. What if we try to add the following line after the last `printArea` call?

```js
printArea(3, 4);
printArea(5, 6);
printArea(715, 831);
console.log(result);
```
Try to modify the code and execute again by typing `node second-program.js`. You should see something like:
```shell
$ node second-program.js
12
30
594165
D:\repositories\github\programming-course\01.introduction-to-programming\second-program.js:13
console.log(result);
            ^

ReferenceError: result is not defined
    at Object.<anonymous> (D:\repositories\github\programming-course\01.introduction-to-programming\second-program.js:13:13)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
```

As you can see, the program failed to execute, giving as a hit of what failed. It says "result is not defined". This is completely correct, because result only exists in the context of the function, and we are calling to the `console.log(...)` outside the context of the function, the scope of the function.

This is an important concept in programming. In general, whenever we execute code, that code is subject to the execution context. This can produce several errors or problems if we don't understand the effects.

As we can see, functions act like small sub programs. You are encouraged to create as many functions as you see fit. In general, separate code into function instead repeating yourself it's considered a good practice. Having lots of small simpler functions is always better than having less complex functions. But try to name your functions in a way that make sense, to avoid having a mess of a code base.

