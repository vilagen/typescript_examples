# typescript_examples
A simple typescript file showing showing examples of typescript

To install typescript to your computer globally, npm install -g typescript.
Check out their documentation for NPM at https://www.npmjs.com/package/typescript

You can also checkout Typescript at https://www.typescriptlang.org/
Use tsc filename.ts to compile your code.
Use tsc filename.ts --watch to start having typescript auto-compile while you save you code.

Typescript helps create javacript files in strong code as opposed to weak code.
This means you can create code being able to declear types to variables. Like:

let age: number = 56;
let eyeColor: string = 'brown';
let favoriteQoute: string = `I'm not old, I'm only ${age}.`;

We have now declared that **age** has to be a *number*, and **eyeColor** a *string*.
Then **favoriteQoute** is also a string, using **age**. 

So when we compile code, if something is wrong it will show up as incorrect while being 
compiled, which makes it much easier to spot errors while coding our projects.
This is something similar to what strong type langauages, like C and Java do.
(Common OOP langauges.)

This is nothing more than a repository going over some simple examples of typescript types.