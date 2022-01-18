// DAY 1

// let myName ="Connah Shackley";
// let randomNum = Math.random; // variable generates random character/number from list

// console.log(myName);
// console.log(myName.length);
// console.log("Connah Shackley".length);
// console.log(myName.toLowerCase());
// console.log(myName.toLowerCase(), myName.toUpperCase());

// // Dice rolling - Generating a random number
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 6)); // round up
// console.log(Math.ceil(Math.random() * 6)); // round down

// console.log("    |      |      |");
// console.log("    |      |      |");
// console.log("    |      |      |");
// console.log("----------------------");
// console.log("    |      |      |");
// console.log("    |      |      |");
// console.log("    |      |      |");
// console.log("----------------------");
// console.log("    |      |      |");
// console.log("    |      |      |");
// console.log("    |      |      |");

// // DAY 2


// console.log("All around the world".charAt(7).toUpperCase()); // Finding a certain character in the string/sentence (7th) and converting to upper case

// console.log(randomNum); // Arrays

// console.log("All around the world".charAt(7).toUpperCase());
// console.log("All around the world".charAt(3).toUpperCase());
// console.log("All around the world".charAt(4).toUpperCase());
// console.log("All around the world".charAt(6).toUpperCase()); 
// console.log("All around the world".charAt(8).toUpperCase());
// console.log("All around the world".charAt(0).toUpperCase());

// // charAt is function - creates array and makes it referencable
// let array = ["A", "l", "l", " ", "a", "r", "o", "u", "n", "d"];

// console.log(array[0]);
// console.log(array[3]);

// // let exampleLet = 10; // let
// // const exampleConst = 10; // const - mostly used when using "Dom" - stores a reference. (Web design - week 3)

// // Working/Changing Data using a string
// let favDrink = "Powerade";
// console.log(favDrink);
// console.log("My favourite drink is " + favDrink + " because it's nice ");
// console.log(`My favourite drink is ${favDrink} because it's nice`);
// favDrink = "tea";
// console.log(`My favourite drink is ${favDrink} because it's nice`);


// // Activity 1
// console.log(myName);
// console.log("My name has 14 letters");
// console.log(myName.toLowerCase(), myName.toUpperCase() + " This shows lowercase and uppercase ");
// console.log("My favourite colour is red");
// console.log("My favourite food is italian");

// // Activity 2
// breakfast = "Avacado cream cheese bagle"
// lunch = "Tuna Pasta"
// Dinner = "Venison, potatoes and veg"

// console.log(`For breakfast i had ${breakfast.toLowerCase()}, for lunch i am having ${lunch.toUpperCase()}, For dinner i am having ${Dinner.toLowerCase()}.`)

// // Activity 3
// let currentDay = new Date('01112022');

// console.log("Todays date is the 11th Janrury 2022");
// console.log("My birthday is the 08th October");
// today=new Date();

// var bday=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
//      bday.setFullYear(bday.getFullYear()+1); 
// }  

// let one_day= 1000*60*60*24;

// console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+
// "days left until Birthday!"); 

// // Activity 4

// let s1 = "x"
// let s2 = "o"
// let s3 = " "
// let s4 = "x"
// let s5 = "x"
// let s6 = " "
// let s7 = "o"
// let s8 = " "
// let s9 = " "

// console.log("      |      |      ")
// console.log("   "+s1+"  |   "+s2+"  |   "+s3+"   ")
// console.log("      |      |      ")
// console.log("--------------------")
// console.log("      |      |      ")
// console.log("   "+s4+"  |   "+s5+"  |   "+s6+"   ")
// console.log("      |      |      ")
// console.log("--------------------")
// console.log("      |      |      ")
// console.log("   "+s7+"  |   "+s8+"  |   "+s9+"   ")
// console.log("      |      |      ")

// // if, else and else if statements

// if (1 < 2) { // if 1 is smaller than 2, print hello
//      console.log("Hello");
// }

// if (1 == 1 && 2 == 2) { // if 1 equals 1 and 2 equals 2, print hello
//      console.log("correct");
// }

// if ( (1 == 1 && 2 == 2) || (5 == 5 || 6 == 6) ){ // if 1 equals 1 and 2 equals 2, or 5 equals 5 OR 6 equals 6, print correct 
//      console.log("correct");
// }

// let car = "Peugeot";
// if(car == "Ford" || car == "GM"){
//  console.log("You've got an American car!");
// }
// else if(car == "Peugeot" || car == "Citroen"){
//  console.log("You've got a French boy!");
// }
// else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
//  console.log("Japanese cars are dead quiet!");
// }
// else if(car == "Mercedes"){
//  console.log("You are proper posh German!");
// }
// else if(car == "Volkswagen"){
//  console.log("German aren't that bad at all!");
// }
// else if(car == "Hyundai" || car == "Kia"){
//  console.log("South Korean cars are getting popular!");
// }
// else{
//  console.log("Your car is not in the top ten companies in the world!");
// }

// const grade = 94;
// switch (true) {
//  case grade >= 80:
//  console.log("Distinction");
//  break;
//  case grade >= 70:
//  console.log("Merit");
//  break;
//  case grade >= 60:
//  console.log("Pass");
//  break;
//  default:
//  console.log("Failed");
// }

// if (grade >= 80) {
//      console.log("Distinction");
// } else if (grade >= 70) {
//      console.log("Merit");
// } else if (grade >= 60) {
// } else {
//      console.log("Fail");
// }

// // if statement activity
// let age = "21";
// let country = "USA";

// if(age > 20 && country == "USA"){
//  console.log("Do you have any proof of ID?");
// } else if (age > 17){
//      console.log ("What would you like to drink?")
// } else
//  console.log("I cannot serve you sorry");

// // Challenge 1: Password has 8 characters or less (Accepted or not)
// let password = "conJS";

// if (password.length < 8) {
//     console.log("Password is to short")
// }
// else {
//     console.log("password accepted");
// }

// // Challenge 2: is the number divisible by 3 or 5
// let num = (17);
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log ("This number is divisible by 3 or 5");
// } else {
//     console.log ("This number is not divisible by 3 or 5");
// } 

// // Challenge 3: requesting fizz, buzz or fizz buzz from the console when a number is divisible by either 3 or 5.
// if ((num % 3 == 0) || (num % 5 == 0)){
//      console.log("Your number is divisible by 3 or 5");
// } else if (num % 3 == 0) {
//      console.log("fizz");
//  }
//  else if (num % 5 == 0) {
//      console.log("buzz");
//  }
 
//  else {
//      console.log(num);
//  }

//  // Challenge 4: Checking if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).
//  function isPalindrome(num) {
//       let arr = num.toString().split("");
//       let reversed = arr.reverse().join("");
//       return num == reversed;
//  }
// console.log(isPalindrome(2002));

// Challenge 5: Create an if statement that logs to the console where someone is at times of the day.

// earlyMorning = "At home getting ready for work"
// lunchTime = "On my lunch break"
// evening = "Home making dinner"
// weekendMorning = "Have a lie in"
// weekendLunchtime = "Go for a walk"
// weekendEvening = "Go to the pub"


// console.log(`At 7am i was ${earlyMorning}. At 1pm i was ${lunchTime}. At 6pm i was ${evening}.`);
// console.log(`On weekend mornings i ${weekendMorning}. At lunch time i then ${weekendLunchtime}. In the evening i ${weekendEvening}.`);

// let time = 9;
// let placeOfWork = "work office";
// let townOfHome = "Liverpool";

// if(time <= 7)
//     console.log("I am at home in " + townOfHome);
// else if(time < 9)
//     console.log("I am commuting to the " + placeOfWork);
// else
//     console.log("I am coding in the " + placeOfWork); 

//Activity 6: Find the index of a last vowel in the string

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// let newStr = (str.lastIndexOf("f"));

// console.log(`${newStr}`);

// // Activity 7: Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false
// let word = "sad";


// if (word.charAt(0) == word.charAt(word. length - 1)){
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// // Activity 8: Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.
// let num1 = 1;
// let num2 = 4;

// if (num1 + num2 % 2 == 0) {
//     console.log (num1 + num2)
// }
// else {
//     console.log (num1 * num2);
// } 


// DAY 3 - Giving the 0's and X's board a winning function

// let s1 = "x"
// let s2 = "o"
// let s3 = " "
// let s4 = "x"
// let s5 = "x"
// let s6 = " "
// let s7 = "o"
// let s8 = " "
// let s9 = " "

// console.log("      |      |      ")
// console.log("   "+s1+"  |   "+s2+"  |   "+s3+"   ")
// console.log("      |      |      ")
// console.log("--------------------")
// console.log("      |      |      ")
// console.log("   "+s4+"  |   "+s5+"  |   "+s6+"   ")
// console.log("      |      |      ")
// console.log("--------------------")
// console.log("      |      |      ")
// console.log("   "+s7+"  |   "+s8+"  |   "+s9+"   ")
// console.log("      |      |      ")

// if (s1, s2, s3 = "x"); // single top row: winning line
// console.log("You Won!");

// let theGrid = [["o", "x", "o"], 
//                ["o", " ", "o"], 
//                ["x", " ", "o"]];
// let toCheck;

// for (let i = 0; i < 2; i++) {
//     if (i == 0) {
//         toCheck = "x";
//     } else {
//         toCheck = "o";
//     }

//     if (theGrid[0][0] == toCheck && theGrid[0][1] == toCheck && theGrid[0][2] == toCheck) {
//         console.log("You won!");
//     }
// }


// // // simple function/method
// // const pressGrindBeans = () => { // () => { is opening a function. } is closing the function
// //     console.log("Hello");
// // }

// // method with if statement example
// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//  if (coffeeIsGrinding) {
//  console.log("Stopping the grind");
//  coffeeIsGrinding = false;
//  } else {
//  console.log("Grinding is about to begin");
//  coffeeIsGrinding = true;
//  }
// }
// pressGrindBeans()

// // Paramaters of a method (what else cazn it do apart from true or false on/off)?

// let accnumber = 50447921;
// let balance = 1000;
// let amount = 400;
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
//     balance = balance - amount;
//     console.log(`Your new balance is ${balance}`);
//    }
//    cashWithdrawal(amount, accnumber); // amount, accnum variables
   
// calling and returning function example 1
// const addUp = (num1, num2) => {
//     return num1 + num2;
//    }
//    addUp(7,3);
//    console.log(addUp(2,5));

// // calling and returning function example 2 - calculating temperature
// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
 
// console.log("The temperature is " + getFahrenheit(15) + "°F"); // Output: The temperature is 59°F

// // decleration example - squaring a number 
// function square(number) {
//     return number * number; 
//    };
    
//    square(5); // Output: 25

// // looping function - Function linked to an identifier; call factorial to get it to do something

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//    }
//    console.log(factorial(33));

// expression - anonymous function - Create variable that stores an anonymous function
// const square = function(number) {
//     return number * number;
//    };
//    square(5);
//    // Output: 25

// DAY 3 Challenges 

// Activity 1: Create a function that takes two parameters for a coffee order (size, type of drink)
// const takeOrder = (size, drinkType, extras) => {
//     console.log(`Order received: ${size} ${drinkType} with ${extras}`);
//    }
//    takeOrder("Tall","Hot Chocolate", "Marshmellows");

// Activity 2: Changing original code into arrow function syntax

// original code 
// function factorial (n)  {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//    }
    
//    console.log(factorial(33))

// New code - Arrow function syntax is ANOTHER WAY OF DECLARING A FUNCTION
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//    }
    
//    console.log(factorial(33));
   
 // DAY 4 

 // Peramaters of "power to"

// const power = (num1, num2) => {
//     return num1 ** num2;
// }

// console.log(power(2, 3));

// Arrays in more detail

// example 1 - using push and pop functions

// let exampleArray = [
//     "item 1",
//     "item 2",
//     "item 3"];

//     console.log(exampleArray.length);
//     console.log(exampleArray[1].length);
//     console.log(exampleArray[1]);
//     exampleArray[1] = "Something new";
//     console.log(exampleArray[1]);
//     console.log(exampleArray);
//     exampleArray.push("This is my new item");
//     console.log(exampleArray);
//     exampleArray.pop();
//     console.log(exampleArray);s
//     console.log(exampleArray[0], exampleArray[2]);

// let coffeeOrder = [
//     "Alex - Cortado",
//     "connah - Cortado",
//     "Charlie - Whatever is new"
// ];

// console.log(coffeeOrder.length);

// coffeeOrder = [
//      "Alex - Cortado",
//      "connah - Cortado",
//      "Charlie - Whatever is new"
// ];

// coffeeOrder.push("Donna - espresso");

// Activity 1 - Create a list of your favourite website (3 of them), and then add another two once you’ve created the list. Then remove the last website.

// let exampleArray = [
//         "Facebook",
//         "Instagram",
//         "Twitter"];
    
//         console.log(exampleArray.length);
//         console.log(exampleArray[1].length);
//         console.log(exampleArray);
//         exampleArray.push("Liverpool FC.com");
//         exampleArray.push("JD Sports");
//         console.log(exampleArray);
//         exampleArray.pop();
//         exampleArray.pop();
//         console.log(exampleArray);
        
//         console.log(exampleArray[0], exampleArray[2]);

// Using for loops with if statement example

// let multiplesTwo = [];

// for(let i = 0; i<20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);

// using for loops with a function 

// Using while loop examples

// let myArray = ["Hi", "Hi", "Hi", "Hello"];

// while (i < myArray.length) {
//     console.log(myArray.push(''));
//     i++;
// }

// Activity 1

// let favyMusic = [ "Drake", "Oliver Heldens","Travis scott"];
// console.log(favyMusic);
// // add to list with .push()
// favyMusic.push("Joel Corry", "Dr.Dre");
// console.log(favyMusic);
// // remove  - .pop()
// favyMusic.pop();

// console.log(favyMusic);

// Activity 2 

// //.map = Return a new array with the square root of all element values: 

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr);

// //.shift

// let movies = ["the romantic","the comedy", "The horror"];
// console.log(movies);
// movies.shift();
// console.log(movies);

// //.unshift

// movies.unshift("The action");
// console.log(movies);

// //.slice

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// const citrus = fruits.slice(1, 2);
// // not sure why it only selects 1 not 2
// console.log(citrus);

// //.splice
// // not working syntax will be:
// // array.splice(index, howmany, item1, ....., itemX)

// const fruits01 = ["Banana", "Orange", "Apple", "Mango"];
// fruits01.splice(0, 1, "Lemon", "Kiwi");
// console.log(fruits01);

// DAY 5 - Objects
// Objects are containers that can store data and functions
// We store data inside the objectsby using key-value pairs

// Example

// const cafe = {
//   name: "Whitesheep",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: [
//   "Cappuccino",
//   "Latte",
//   "Filter coffee", 
//   "Tea",
//   "Hot chocolate"
//   ]
//  };
 
// Let’s say Whitesheep have different specials based on the time of day…
// Free croissants at breakfast…
// Free drink with a sandwich at lunch…

// let offer = "none";
// let time = 1200;
// const cafe = {
//  name: "Whitesheep",
//  seatingCapacity: 100,
//  hasSpecialOffers: true,
//  drinks: [
//  "Cappuccino",
//  "Latte",
//  "Filter coffee", 
//  "Tea",
//  "Hot chocolate"
//  ],
 
//  breakfastOffer: "Free croissant with coffee",
//  lunchOffer: "Free drink with surprisingly priced sandwich",
//  noOffer: "Sorry no offer"
// };

// console.log(cafe);

// if statement used with the method above

// let offer = "none";
// let time = 1200;
// const cafe = {
//  name: "Whitesheep",
//  seatingCapacity: 100,
//  hasSpecialOffers: true,
//  drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
//  breakfastOffer: "Free croissant with coffee",
//  lunchOffer: "Free drink with surprisingly priced sandwich",
//  noOffer: "Sorry no offer"
// };
// if (time < 1100){
//  offer = cafe.breakfastOffer;
//  console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//  offer = cafe.lunchOffer;
//  console.log(cafe.lunchOffer);
// }

//  console.log(cafe);

// DAY 5 - Activity 1 - Create a key called weekendAlarm, with a value saying “no alarm needed”, and a key called weekdayAlarm, with a value saying “get up at 7am”
// Create a variable called day and one called alarm
// If day is Saturday or Sunday, set alarm to weekendAlarm
// If the day is a weekday, set alarm to weekdayAlarm

// 
// // Using if statement with above method
// if (day == "Saturday" || day == "Sunday"){
//   console.log(weekendAlarm); }

//   else if (day == "Monday" || day == "Tuesday" || day ==
//   "Wednesday" || day == "Thursday" || day == "Friday") {
//     console.log(weekendAlarm)
//   }


// WEEK 2 DAY 1 - Objects warmup/refresher exercise

// const objPet = {

//     name:       "Sonny",
//     typeOfPet:  "Bison Fraise",
//     age:        "1",
//     colour:     "White",

//     eat: function () {
//         console.log(`${this.name} is eating Dog Food`);
//     },
//     drink: function () {
//         console.log(`${this.name} is drinking water`);
//     }
// }

// objPet.eat();
// objPet.drink();

// Create a shopping list using arrays - multiArray - example 1 

// let array = ["something", "something else"];
// let multiArray = [["something", "something else"], ["another thing", "running out of ideas"]];

// let bigOne = [
//     {catagory: "veg", list: ["carrot", "peppers"]},
//     {catagory: "dog", list: ["food", "chews"]},
//     {catagory: "cleaning", list: ["sponges", "fairy liquid"]}
// ];

// console.log(bigOne[1].list[1]);

// Example 2

let shopping = [
    ["yogurt", "milk", "apple juice"], 
    ["bananas", "apples", "oranges"],
    ["rice", "pasta", "noodles"]
   ]
   console.log(shopping[1][2]);
   //output: oranges
   