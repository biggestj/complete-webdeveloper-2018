// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let firstName = person.firstName;
let lastName = person.lastName;
let age = person.age;
let eyeColor = person.eyeColor;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const myFirstSymbol = Symbol("This is my first symbol");

// Arrow functions
const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";