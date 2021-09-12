# Create a website from scratch
Open a bash terminal (or the ugly command prompt sister) and follow the instructions:

```shell
$ npm install -D webpack
```

```shell
$ npx webpack init
```
```shell
- Install webpack-cli?
  yes

- Install @webpack-cli/generators?
  yes

- Which of the following JS solutions do you want to use?
  ES6

- Do you want to use webpack-dev-server?
  yes

- Do you want to simplify the creation of HTML files for your bundle?
  yes

- Do you want to add PWA support?
  yes

- Which of the following CSS solutions do you want to use?
  SASS

- Will you be using CSS styles along with SASS in your project?
  yes

- Will you be using PostCSS in your project?
  yes

- Do you want to extract CSS for every file?
  no

- Do you like to install prettier to format generated configuration?
  yes
```

Webpack will generate several files. Each file has a particular purpose but it can be overwhelming at first.

- In the `src` folder you'll find the javascript files that your website will use.
- The file `.babelrc` contains the configuration for babel. Babel it's a javascript transpiler that let you write with the latest specs, but produce compatible js code with older browsers.
- The `postcss.config.js` configures a module called PostCSS that let you write agnostic css, and then PostCSS will take care of producing valid css code for multiple browsers, avoiding browser specific prefixes.
- `webpack.config.js`contains the configuration for webpack. Webpack acts a the orchestration tool that will compile javascript code into a file, will call babel to transpile de code, will convert SASS code into css and then call PostCSS, and more. It can also configure a dev server, configure watch mode, etc.

Before start working, let's change a couple of things:
1. Create a new folder called `public` at the same level as the folder `src`.
2. Move the file `index.html` to that folder.
3. Open the file `webpack.config.js` and change the following:
   ```js
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
   ```
   with the following code:
   ```js
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
   ```
4. Now, open the file `package.json` and go to the `scripts: {...}` section, and add the following lines:
   ```json
        "start": "npm run serve",
        "prestart": "npm i"
   ```
   The first line will run one of the tasks that webpack configured for us, but in a more standard way. Everyone that is familiar with node will first try to execute `npm start`. The other task, will try to install dependencies before running the application, in case the people using it forgot to run `npm i` before `npm start`.

To start working, open the terminal again, and then type:

```shell
$ npm start
```

This will launch your website with the webpack dev server in watch mode, which means every time you change your files, the server will automatically refresh the page in your browser automatically.

If you want to register a service worker and make a PWA, you can create a file called `service-worker.js` inside the `public` folder.

Now, try to add the following class into a file called `player.js` inside the `src` folder:
```js
export default class Player
{
    constructor(lives = 5, energy = 100)
    {
        this.lives = lives;
        this.energy = energy;
    }

    start()
    {
        this.#print('Player started!');
        this.draw();
    }

    draw()
    {
        this.#print(`Lives: ${this.lives}   Energy: ${this.energy}`);
    }

    hit(damage = 5)
    {
        this.energy -= damage;

        if (this.energy <= 0)
        {
            this.kill();
        }

        this.draw();
    }

    kill()
    {
        this.lives--;
        this.energy = 100;

        if (this.lives === 0)
        {
            this.energy = 0;
            this.#print('you loose');
        }
    }

    #print(text)
    {
        document.querySelector("h2").innerHTML += `<br/>${text}`;
    }
}
```

And after adding the file, go to the file `index.js` and place the following code:

```js
import Player from "./player";


const player1 = new Player();
player1.start();
player1.hit();
```

If everything went as expected, you should see something like:

---
## Hello world!
### Tip: Check your console!
### Player started!
### Lives: 5 Energy: 100
### Lives: 5 Energy: 95
---

