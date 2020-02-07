// STEP 1 
// STEP 2 
// STEP 3 


// STEP 1
// Convert the following identifiers to Camel Case notation:
var someMonth;
var currentMonth;
var summerMonth;
var myLibraryFunction;
function theMonth() {}

// STEP 2
// Give me an example of a numeric literal expression, a string literal expression, 
// a Boolean literal expression, and a null literal expression.

var myNumber = 123; //numeric literal expression 
var myString = "My String"; //string literal expression
var myBoolean = true; //boolean literal expression
var myNull = null; //null literal expression

// STEP 3
// Give me two examples of complex / variable expressions.

var myFruitsArray = ["Orange", "Apple", "Banana", "Mango"];
var myObject = { "First-name" : "Paulo", "Last-name" : "Rego", "Age" : 35  };

// STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: 
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, 
// May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

var firstNameString;
var lastNameString;
var addressString;
var cityString;
var stateArray;
var zipNumber;
var codeNumber;
var ageNumber;
var referralSourceNumber; 

// STEP 5
// Take the 9 variables that you created above and demonstrate 3 methods for declaring 
// and assigning values to those variables.

firstNameString = "Paulo";
zipNumber = 92111;
stateArray = ['CA', 'NY'];

// STEP 6
// Create a variable. Add a number and a string and display the coerced result 
// in the browser’s console window. 

var myVar1 = 35;
myVar = "My Age is, " + myVar1;

console.log(myVar1);

// STEP 7
// Create two variables. For the first variable, add a Boolean and a string and display 
// the coerced result. For the second variable, add a number and a Boolean and display 
// the coerced result. 

var myVar2 = "Tris is " + true;
console.log(myVar2);

// STEP 8
// Is the following string literal valid? If not, how would you fix it? 
// var someString = 'Who once said, "Only two things are infinite, 
// the universe and human stupidity, and I'm not sure about the former."';
// window.console.log(someString);  

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

// STEP 9
// Create a variable that produces a null value in the console window. 
// Create a variable that produces an undefined value in the console window.

var myVar3 = null;
console.log(myVar3);

// STEP 10
// Use the typeof operator on various literals to return the following types within 
// the console window: string, number, Boolean, object, and undefined.

var myString = "";
var myNumber = 0;
var myBoolean = true;
var myObject = { "key-1": "value 1", "key-2": "value 2"};
var myUndefined = undefined;

console.log(typeof(myString));
console.log(typeof(myNumber));
console.log(typeof(myBoolean));
console.log(typeof(myObject));
console.log(typeof(myUndefined));

// STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert 
// box that appears as follows: Hello Zak Ruvalcaba, welcome to the JavaScript class!
// Substitute my name for your name. Although not necessary in practice, 
// I want you to use 2 concatenation operators to construct this string of text. 
// One after the text “Hello” and a second one after your name and before the comma.
window.alert("Hello " + "Paulo Rego" + ", welcome to the JavaScript class!");

// STEP 12
// Declare a variable called name and set it equal to your name. 
// Substitute your name in the previous alert string with the variable instead.

var myName = "Paulo Rego";
window.alert("Hello " + myName + ", welcome to the JavaScript class!");

// STEP 13
// Declare a variable called course and set it equal to “JavaScript”. 
// Rework your alert string so that it displays the string of text but 
// using the variables as opposed to hard coded text.

var course = "JavaScript";
window.alert("Hello " + myName + ", welcome to the " + course + " class!");

// STEP 14
// Rework the above string so that a line break is added right before the word “Welcome”. 
// Your alert box should display as follows: Hello Zak Ruvalcaba. Welcome to the JavaScript class!

window.alert("Hello " + myName + ", \nWelcome to the " + course + " class!");

// STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user for their name. 
// The prompt’s response will now be captured in the name variable. 

let myNameFromPrompt = window.prompt("What is your name?");
window.alert("Hello " + myNameFromPrompt + ", \nWelcome to the " + course + " class!");

// STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for 
// the class they are taking. The prompt’s response will now be captured in the course variable.

let courseFromPrompt = window.prompt("What class are you taking?");
window.alert("Hello " + myNameFromPrompt + ", \nWelcome to the " + courseFromPrompt + " class!");

// STEP 17
// Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. 
// Display the sum of those two numbers in the console window. 

var x = 10;
var y = 20;

console.log(x +y);

// STEP 18
// Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable 
// and display the result in the console window. The result should be 40.

var x = 20;
x += 20;

console.log(x);

// STEP 19
// Declare a variable called x and assign it a value of 20. Multiply and assign 5 to that 
// variable and display the result in the console window. The result should be 100.

var x = 20;
x *= 5;

console.log(x);

// STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window. 
// The result should be 2. If you got 6.66 try again.

var x = 20 % 3;
console.log(x);


// STEP 21
// Using a set of Comparison and Logical operators, write an application that evaluates 
// to true and displays the result within the console window.

var myBollean = true;

if (myBollean) {
    console.log("This is a true statement!");
}

// STEP 22
// Using a set of Comparison and Logical operators, write an application that evaluates to 
// false and displays the result within the console window. The application cannot use the same 
// operators used in the previous application.

var myBollean = false;

if (myBollean) {
    console.log("This is a true statement!");
} else {
    console.log("This is a false statement!");
}

// STEP 23
// Use the new operator to create a new Object called “widget”. Within the console window, 
// use the typeof operator to display the type of variable widget is.

var widget = new Object();
console.log(typeof(widget));

// STEP 24
// Using the instanceof operator, write an application that returns true within the console 
// window if the widget variable is an instance of an object.

if (widget instanceof Object){
    console.log(true);
}

// STEP 25 
// Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.
if (!(widget instanceof String)){
    console.log(false);
}
