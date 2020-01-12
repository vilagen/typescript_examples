// types of type scripts

// boolean 
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favoriteQoute: string = `I'm not old, I'm only ${age}.`;

// Arrays
let pets: string[] = ['cat', 'dog', 'bird', 'pig', 'zebra'];
let morePets: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
  a: 'John'
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

// Any !!!!!!!!!! BE CAREFUL: MAKE SURE YOU ARE USING IT RIGHT!!!!
// Useful for cases of converting your code to typescript code. 
// That could take time, so you may just want to use an any.
// Basically, any isn't really taking advantage of typescript at all, so use sparingly.
let whatever: any = 'aghhhhhhhh nooooooo!!!';
whatever = basket;

// void
// means that you aren't returning anything. 
// Putting a return statement would cause an error for example since it would returning a value.
let sing = (): void => {
  console.log('lalalalalalalalala');
};

// never
// this tests 2 things: 
// 1. that a function never returns. ( Never has an endpoint. Even void has an endpoint, like the console.log('lalalalalalalalala') )
// 2. a variable under some sort of a type guard is never true.
let error = (): never => {
  throw Error('oooops');
};

// interface
// difference between interfaces and type is that interfaces create a new name that we can use everywhere
// interaces are usually recommended to use bec of cleaner syntax and better error output.
interface RobotArmy {
  count: number,
  type: string,
  magic?: string, // the ? means it may, or may not, be part of the object. As in, it is optional to include.
};

// type
// does not create a new name.
type RobotArmy2 = {
  count: number,
  type: string,
  magic: string,
};

let fightRobotArmy = (robots: RobotArmy ) => {
  console.log('FIGHT');
};
fightRobotArmy({ count: 1, type:'dragon' })

let fightRobot2Army = (robots: RobotArmy ) => {
  console.log('FIGHT');
};
fightRobot2Army({ count: 1, type:'dragon', magic: 'fire' })

let fightRobotArmy2= (robots: { count: number, type: string, magic: string }) => {
  console.log('Fight');
};

// Type Assertion
// type assertion allows you to override a type in anyway we would want.
interface CatArmy {
  count: number,
  type: string,
  magic: string,
};

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3= (robots: RobotArmy): void => {
  console.log('Fight');
};

let fightRobotArmy4= (robots: { count: number, type: string, magic: string }): number => {
  console.log('Fight');
  return 5;
};

// Class
class Animal {
  // private, I believe, will leave this varialbe only available in this class, so outside can't use something like lion.sing.
  // normally the variable would be in public, though won't say anything.
  private sing: string = 'alalalalalalalala'; 
  constructor(sound: string) {
    this.sing = sound;
  };

  greet(): string {
    return `Hello ${this.sing}.`;
  };
};

let lion = new Animal('ROAR!');
// lion.sing doesn't work while sing is in private.  

// Union 
// a variable could be different types 
let confused: string | number = "hello";
let confused2: string | number = 5;
// let confused3: string | number = true; // this will not work, because no boolean type defined.
let confused4: string | number | boolean = true;

// Typescript has their own inferrences. 
// Meaning, that it will try to define a type for you if you didn't specify one.
let x = 4;
// x = "hello" would fail because typescript already believes that x should be a 'number' instead of 'string'.

// How can third party libraries be effected by typescript? 
// For example, think about jquery. That isn't javascript, it's a library. 
// There are decloration types of files that can declear what libraries you are using. 
// Example is @type/react