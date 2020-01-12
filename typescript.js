// types of type scripts
// boolean 
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favoriteQoute = "I'm not old, I'm only " + age + ".";
// Arrays
var pets = ['cat', 'dog', 'bird', 'pig', 'zebra'];
var morePets = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var sizeName2 = Size.Small;
// Any !!!!!!!!!! BE CAREFUL: MAKE SURE YOU ARE USING IT RIGHT!!!!
// Useful for cases of converting your code to typescript code. 
// That could take time, so you may just want to use an any.
// Basically, any isn't really taking advantage of typescript at all, so use sparingly.
var whatever = 'aghhhhhhhh nooooooo!!!';
whatever = basket;
// void
// means that you aren't returning anything. 
// Putting a return statement would cause an error for example since it would returning a value.
var sing = function () {
    console.log('lalalalalalalalala');
};
// never
// this tests 2 things: 
// 1. that a function never returns. ( Never has an endpoint. Even void has an endpoint, like the console.log('lalalalalalalalala') )
// 2. a variable under some sort of a type guard is never true.
var error = function () {
    throw Error('oooops');
};
;
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobot2Army = function (robots) {
    console.log('FIGHT');
};
fightRobot2Army({ count: 1, type: 'dragon', magic: 'fire' });
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
;
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        // private, I believe, will leave this varialbe only available in this class, so outside can't use something like lion.sing.
        // normally the variable would be in public, though won't say anything.
        this.sing = 'alalalalalalalala';
        this.sing = sound;
    }
    ;
    Animal.prototype.greet = function () {
        return "Hello " + this.sing + ".";
    };
    ;
    return Animal;
}());
;
var lion = new Animal('ROAR!');
// lion.sing doesn't work while sing is in private.  
// Union 
// a variable could be different types 
var confused = "hello";
var confused2 = 5;
// let confused3: string | number = true; // this will not work, because no boolean type defined.
var confused4 = true;
// Typescript has their own inferrences. 
// Meaning, that it will try to define a type for you if you didn't specify one.
var x = 4;
// x = "hello" would fail because typescript already believes that x should be a 'number' instead of 'string'.
// How can third party libraries be effected by typescript? 
// For example, think about jquery. That isn't javascript, it's a library. 
// There are decloration types of files that can declear what libraries you are using. 
// Example is @type/react
