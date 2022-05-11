// && (AND)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


// || (OR)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// ||
// If neither side is truthy, || will return the rightmost falsy thing.
// Otherwise, it returns the leftmost truthy thing.
// If either side is truthy, || will return the leftmost truthy thing.
// Otherwise, it returns the rightmost falsy thing.
// For example:
console.log("" || 0)

let firstName = "Mark"
console.log(firstName || "Martin")
console.log(-0)


let transportOption = 'metro';
// console log data based on condition
switch (transportOption) {
  case 'car':
    console.log("lets go for a drive!");
  case 'bus':
    console.log("the wheels on the bus go round and round");
  case 'metro':
    console.log("Take the A train");
}

if (transportOption == "car") {
  console.log("lets go for a drive!");
}
if (transportOption == "bus") {
  console.log("the wheels on the bus go round and round");
}
else if (transportOption == "metro") {
  console.log("Take the A train");
}



// &&
// If both sides are truthy, && will return the rightmost truthy thing.
// Otherwise, it returns the leftmost falsy thing.
// If either side is falsy, && will return the leftmost falsy thing.
// Otherwise, it will return the rightmost truthy thing.
// For example:
console.log("a" && 0)

let seasonCheck = "summer"

switch (seasonCheck) {
  case 'autumn':
  case 'fall':
    console.log("It's fall now!");
    break;

  case 'spring':
  case 'summer':
    console.log("It's warm!");
}

if (seasonCheck === 'autumn' || seasonCheck === "fall") {
  console.log("It's fall now!");
}
else if (seasonCheck === 'spring' || seasonCheck === "summer") {
  console.log("It's warm!");
}


let car = {
  0: "zero",
  make: "Toyota",
  model: "Camry",
  numberOfWheels: 4,
  mpg: 27.5,
  canFly: false,
  availableColors: {
    "red": "#F00",
    "green": "#0F0",
    "blue": "#00F",
  },
}

console.log(car.canFly)
console.log(car.mpg)
console.log(car["canFly"])
console.log(car["mpg"])
console.log(car["availableColors"]["red"])
console.log(car["availableColors"]["green"])
console.log(car["availableColors"]["blue"])
console.log(car.availableColors.red)
console.log(car.availableColors.green)
console.log(car.availableColors.blue)

console.log(car[0])

let arr = ["banana", "orange", "apple", "kiwi"]

arr

console.log(arr[1])
console.log(arr.slice(-2))

// property
console.log(arr.length)

// methods
console.log(arr.reverse())

const myObj = {0: "banana", 1: "orange", 2: "apple"}
myObj
myObj[0] = "kiwi"
myObj

const fruits = ["banana", "orange", "apple"];
fruits
fruits[0] = "kiwi"
fruits
fruits.reverse()
fruits

console.log("2022-04-21T20:12:071283472512389476".slice(0, 10))
console.log("2022-04-21T20:12:071283472512389476".slice(11, 19))

// Let's output some array values
fruits[0]; // will output "banana"
fruits[1]; // will output "orange"
fruits[2]; // will output "apple"

// You can mix this up asking for the index number of any array item
const fruitsOrangePosition = fruits.indexOf("orange"); // outputs '1'
fruitsOrangePosition

// This gives us the length of the array
const fruitsLength = fruits.length; // will output "3"

// .pop() removes the last item
let fruit = fruits.pop(); // fruits = ["banana", "orange"];
fruit
fruits

// .shift() removes the first item
fruit = fruits.shift(); // fruits = ["orange"];
fruit
fruits


// .push() adds whatever you into the method parenthesis to the end of the array
fruits.push("kiwi"); // fruits = ["orange", "kiwi"];
fruits

// .unshift() adds whatever you into the method parenthesis to the beginning of the array
fruits.unshift("cherry"); // fruits = ["cherry", "orange", "kiwi"];
fruits

// splice() adjusts array values (REMOVE)
// 1st number = index value for splice
// 2nd number = number of items to remove
fruits.splice(1, 1); // fruits = ["cherry", "kiwi"];
fruits

// splice() adjusts array values (ADD)
// 1st number = index value for splice
// 2nd number = number of items to remove
// 3rd value = item to be added to array
fruits.splice(1, 0, "pear"); // fruits = ["cherry", "pear", "kiwi"];
fruits

// reverse() switches around the values in the array without modifying them
fruits.reverse(); // fruits = ["kiwi", "pear", "cherry"];
fruits

// join() takes your array and combines - or concatenates - it to create a string
// The string is separated by whatever you put into the parentheses of the method
const fruitsList = fruits.join(", ");
// fruitsList = "kiwi and pear and cherry";
fruits
fruitsList

// Multi-dimensional arrays
// Put arrays into arrays
const produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]];
produce
let result = produce.map(item => item.join(", "))
result
result = produce.map(item => item.reverse())
result
result = produce.map(item => item.slice(1))
result
produce
let lengths = produce.map(item => item.length)
lengths
lengths = produce.map(item => item.map(subitem => subitem.length))
lengths
result = produce.map(item => item.map(subitem => subitem.toLocaleUpperCase()))
result

console.log("kiwi".includes("i"))
fruits
result = fruits.filter(item => item.length > 5)
result
result = fruits.filter(item => item > "h")
result
result = fruits.filter(item => item.includes("e"))
result
console.log(fruits.length)
console.log("fruits".length)

const identity = x => x

console.log(identity("hello".toLocaleUpperCase()))

console.log("abc"[1])
let abc = "abcdef"
abc[2] = "2"
abc

let letters = []
for (let i = 0; i <= 5; i++) {
  console.log(letters.push(abc[i])); 
}
letters

const myArray = ["John", "Benjamin", "Victor", "Serrao"];

for (let i = 0; i < myArray.length; i++) {
  console.log("Hello", myArray[i]); 
}

/*
 * ################################################
 * Basic for loop
 *
 * Just looping over an array to add each item as an element in the DOM
 *
 */

const bigAnimals = ["elephant", "giraffe", "whale", "grizzly", "rhino", "bison", "panda", "komodo dragon"];

/*
 * ################################################
 * Basic for loop
 *
 * Combining a basic array, for loop and a conditional statement
 *
 */

for (let i=0; i < bigAnimals.length; i++) {
  console.log(bigAnimals[i])
  if (bigAnimals[i] === "whale") {
    console.log(
      "We found the biggest animal of them all, the whale, at array position "
      + bigAnimals.indexOf("whale")
      );
      break;
  }
}

console.log(bigAnimals.indexOf("whale"))

/*
 * ################################################
 * While loop use case
 *
 * Basically the only time most developers use while loops is when they don't know how long they want to loop
 * This really only happens when you have randomizing data
 * Here's a crude example of having a deck of cards and finding an ace by randomly selecting an index to draw a random card from the array
 *
 */

// Sets up random variables
const myDeck = ["2", "3", "4", "5", "6", "A", "7", "8", "9", "10", "J", "Q", "K"];
let i = 0;
let myCard;
console.log(myDeck.length)
let randomFloat
// Uses while loop to check to make sure the ace hasn't been found
// 3.00001 -ceil-> 4
// 3.99999 -floor-> 3
while (myCard !== "A") {
  randomFloat = Math.random() 
  idx = Math.floor(randomFloat * myDeck.length)
  myCard = myDeck[idx]; // gets random value from array
  console.log(randomFloat)
  console.log(idx)
  console.log(myCard)
  console.log(i)
  i++; // counts how many times it takes
}

// arrays
let mixedArray = ["a", 1, true, [0, 1, 2]]
mixedArray

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}