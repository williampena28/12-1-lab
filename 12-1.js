//William Peña

/*
    A.      Q + A
1. How do we assign a value to a variable? 
    A. We use the assignment operator '=' and then the value after it
2. How do we change the value of a variable? 
    A. We use the assignment operator '=' and then the new value of the variable
3. How do we assign an existing variable to a new variable? 
    A. We use the assignment operator '='after the name of the new variable then the name of the existing variable afterward
4. Remind me, what are declare, assign, and define? 
    A. Declaring is telling the program that we need said variable that we are declaring. Assigning is giving a value to a  using the '=' operator. Defining a variable is asigning its value to the correct data type (i.e string, num, float, null)
5. What is pseudocoding and why should you do it? 
    A. Pseudocoding is the process of writing out your process for what your program is going to do, step by step in plain english so that you get a thoughtout idea for how your code works.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it 
    A. Around 90% of time should be spent thinking out and understanding the problem
*/

//    B.      STRINGS

let firstVariable = 546;
let secondVariable = "Any string";

//6. The value of firstVariable is 546
console.log(firstVariable);

let yourName = "William Peña";
console.log(`Hello, my name is ${yourName}!`);

//      C.      BOOLEANS

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a != d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//      D.      The Farm
let animal = "ant";
if(animal == "cow")
{
    console.log("mooooo");
} else
{
    console.log("Hey! You're not a cow.");
}