# 00. Prerequisites
In order for the course to be taken, students will be required to have a minimum set of tools that will be used along the courses to work and test what the tutor will explain.

## VSCODE
When programming in any language, having a good text editor is of the utmost importance. As we'll see in the next chapters, good programming editors are not mere text editors, but they also include advanced capabilities like understanding the language you are writing, and provide features like contextual renames, function extraction, style constraints and much more.

At the time of writing these tutorials, `Visual Studio Code` stands out as one of the best free programming IDEs and text editors out there. Includes a bast amount of plugins and modules you can add to enrich your programming experience. Currently posses a enormous community of developers using and improving the editor. `VSCODE` is programmed and uses the same technology we'll use for the tutorials, javascript, typescript, html, css, etc. Utilizes a technology called electron that we'll try to review in future courses. VSCODE is also available for Linux, Mac and Windows.

[Download](https://code.visualstudio.com/download) | [Learn More](https://code.visualstudio.com/docs)
<br>
<br>

## Git
Any programmer that has worked in medium or large teams know about the hurdles of working when many people modify the same files. It's also frequent to want to save and version files, to go back in time if in the future we want to review what or why we did a particular modification. This type of applications are called `Version Control Systems` or `Source Control Systems` and are a must to work in the industry. We'll see that it will also help us with our daily jobs and make our life easier in the long run. Don't feel bad if in the beginning you find difficult to use these systems, or you don't fully understand the reason. In time this will become clearer.

At the time of this writing, there's one clear winner in the space of source control systems, and it's called `Git`. It was created by Linus Torvalds (the original programmer of Linux) to be used by him and the linux kernel programmers to version and control the sources of the Linux Operating System.

During these courses we'll explain bits of Git, although a full understanding and management of Git it's outside the purpose of these classes. Some video links will be provided and it's left for the user to continue researching and using Git.

### Introduction to Git
| Index | Title | Duration (minutes) |
|---    |---    | ---      |
|01     |[Core Concepts](https://www.youtube.com/watch?v=uR6G2v_WsRA)| 28:37|
|02     |[Branching and Merging](https://www.youtube.com/watch?v=FyAAIHHClqI)| 28:47|
|03     |[Remotes](https://www.youtube.com/watch?v=Gg4bLk8cGNo)| 31:15|

[Download](https://git-scm.com/downloads) | [Learn More](https://git-scm.com/doc)
<br>
<br>

## Node.JS
`Node.JS` or simply `Node` it's a javascript runtime environment that let us execute javascript code without the need of a browser, and without the sandbox restrictions a browser imposes over the code. `Node` is made by the `V8 engine` (the javascript compiler and JIT solution made by the Chromium project) and a series of system libraries to access the underlying operating system. With `Node` we can create javascript programs that read and write to the standard output (console), to files, sockets and more. We can interact with the computer devices, and much more.

We'll delve into the world of `Node` with every passing class, but right now we need you to install the runtime in your machine so we can start following the courses.

> **NOTE**: When installing Node.JS be sure of selecting the option to add Node.JS to the system path. It's important that node is accessible as an environment variable for the exercises to work. If you forgot to check this option, Don't worry, there's still ways to solve this problem.
>
> If you are in Linux or Mac you can open your terminal and type `export PATH=$PATH:/usr/local/nodejs/bin`.
>
> If you are a Windows user, you'll need to open the System Properties, you can do it by searching "Edit the system environment variables". This will open the System Properties window. In there, press the button "Environment Variables". In that new window you'll have to edit the PATH variable and add the path to the node bin folder, normally "%ProgramFiles%\nodejs\".

[Download Here](https://nodejs.org/en/download/) | [Learn More](https://nodejs.org/en/about/)
<br>
<br>

## Reviewing the tools
Now that we have everything in place, we should be able to create an empty project and start playing with them. We'll make a quick test utilizing all the tools together, and test if all the installation steps were successful.

1. Open a browser explorer, or a terminal depending on what you feel more comfortable.

2. Create a new folder called `programming-course`, or type:
   ```shell
   $ mkdir programming-course
   ```
3. Navigate to that folder and create a new folder called `00.prerequisites`, or type:
   ```shell
   $ cd programming-course
   $ mkdir 01.prerequisites
   ```
4. If you are using windows and you don't feel comfortable using the console, now search and open the `Visual Studio Code` and once opened go to `File > Open Folder...` and select the folder `programming-course/00.prerequisites`. If you use the terminal then type:
   ```shell
   $ cd 00.prerequisites
   $ code .
   ```
5. If you followed the instructions correctly, you should see the visual studio changing and showing you an explorer bar on the left, with a series of buttons: Explorer, Search, Source Control, etc. The explorer list will be empty because we didn't create files yet. That's our next step.

6. Create a file called `index.js`. You can create files by right clicking the explorer and pressing `New File` or if you hover with your mouse over the explorer area, you should see a couple of icons appearing to create new files, folders, reloading and collapsing the tree.

7. Once you created the file, you should see that `VSCODE` automatically recognized the file as a javascript file. This editor in particular comes with a lot of builtin features specially configured for javascript, and with time we'll add more plugins.

8. Lets now add some code to the file. Type:
   ```js
   console.log('Hello programming world!');
   ```
9. Now we'll open the embedded terminal (console). Go to `VSCODE` menu and click `Terminal > New Terminal`. A terminal should appear on the bottom part of your editor. The terminal used by default will change depending on your operating system. This can be changed later. It's a matter of personal taste, but I prefer using bash. If you are a Windows user, Git probably installed a Bash version for windows. You can switch to bash if you want. Anyway, any terminal will do the job, Cmd, Bash, Powershell, etc.

10. Click and focus the terminal, and then type:
    ```bash
    node index.js
    ```
    and press `ENTER`

11. You should see the following output:
    ```bash
    $ node index.js
    Hello programming world!
    ```

If you were able to successfully follow this introduction tutorial, you already wrote your first program! Congratulations! In the following chapters will start learning about programming, what a programming language is, what tools do we have at our disposal, and grow our understanding from there.

See you in the next chapter!