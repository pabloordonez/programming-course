# 00. Introduction to Programming
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

- **Imperative**: in which the programmer instructs the machine how to change its state.
- **Procedural**: which groups instructions into procedures.
- **Object-oriented**: which groups instructions with the part of the state they operate on.
- **Declarative**: in which the programmer merely declares properties of the desired result, but not how to compute it.
- **Functional**: in which the desired result is declared as the value of a series of function applications.
- **Logic**: in which the desired result is declared as the answer to a question about a system of facts and rules.
- **Mathematical**: in which the desired result is declared as the solution of an optimization problem reactive in which the desired result is declared with data streams and the propagation of change.

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
   ```bash
   $ node first-program.js
   ```
   If everything went well, you should see an output similar to:
   ```bash
   node .\first-program.js
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

This is nice! But what if we want to compute other areas? Having to modify the source code every time we want a different calculation sounds like too much trouble. It would be nice if, as regular calculator, the user could provide the parameters width and height when executing the program, instead of hardcoding the values into the program. Let's change our code so that the user can provide these values.

