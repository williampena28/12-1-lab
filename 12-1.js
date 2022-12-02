//William Peña

/*
    I A.      Q + A
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

//    I B.      STRINGS

let firstVariable = 546;
let secondVariable = "Any string";

//6. The value of firstVariable is 546
console.log(firstVariable);

let yourName = "William Peña";
console.log(`Hello, my name is ${yourName}!`);

//      I C.      BOOLEANS

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

//      I D.      The Farm
let animal = "ant";
if(animal == "cow")
{
    console.log("mooooo");
} else
{
    console.log("Hey! You're not a cow.");
}

//      I E.      Driver's Ed
let personAge = 15;
if(personAge >= 16)
{
    console.log("Here are the keys!");
} else if (personAge < 16)
{
    console.log("Sorry, you're too young.");
}

//      II. LOOPS

//      A. THE BASICS
for(let i = 0; i <= 10; i++)
{
    console.log(i);
}

for(let i = 10; i <= 400; i++)
{
    console.log(i);
}

for(let i = 12; i < 4000; i++)
{
    if(i % 3 == 0)
    {
        console.log(i);
    }
}

//      II B. Get even
for(let i = 0; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        console.log(`${i} <-- is an even number`)
    } else 
    {
        console.log(i);
    }
}

//      II C. GIVE ME FIVE
for(let i = 0; i <= 100; i++)
{
    if(i % 5 == 0 && i % 3 == 0)
    {
        console.log(`I found a ${i}. Three is a crowd! High five!`);
    } else if (i % 3 == 0)
    {
        console.log(`I found a ${i}. Three is a crowd!`);
    } else if (i % 5 == 0)
    {
        console.log(`I found a ${i}. High five!`);
    }
}

//      II D. SAVINGS ACCOUNT
let bank_account = 0;
for(let i = 0; i <= 100; i++)
{
    bank_account += i;
}
bank_account *= 2;
console.log(bank_account);

//      III. ARRAYS & CONTROL FLOW
/*      III A Talk about it
    1. What are the things in an array called?
        A. They are called elements
    2. Do Arrays guanrantee those things will be in order?
        A. Arrays are not guaranteed to be ordered. We would have to sort them manually or with built in methods
    3. What real-life thing could you model with an array?
        A. We could model a list of student names in a classroom for example
*/

//      III. B EASY DOES IT
let quotes = ["When life gives you lemons, make lemonade", "Make love, not war.", "Why did the chicken cross the road?"];

//      III. C ACCESSING ELEMENTS
const randomThings = [1, 10, "Hello", true];
//1. randomThings[0]. We use the [0] operator with 0 being the first index which has the first element of the array
randomThings[2] = "World";
console.log(randomThings[2]);

//      III. D CHANGE VALUES
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//1. ourClass[2] to access the 3rd element of the array
ourClass[4] = "Octocat";
ourClass.push("Cloud City");

//      III. E MIX IT UP
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Another string");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();

console.log(myArray);
//By using .push(), .shift(), .pop(), etc. I have mutated the array, meaning that I have added/taken away new values to the array

//      III. F Biggie Smalls
let num = 7;
if(num < 100)
{
    console.log("Little number");
} else if (num > 100)
{
    console.log("Big number");
}

//      III. G Monkey in the Middle
if(num < 5)
{
    console.log("Little number");
} else if (num > 10)
{
    console.log("Big number");
} else
{
    console.log("Monkey");
}

//      III. H What's in your closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
  kristynsCloset.splice(6, 0, "raybans");
  kristynsCloset[5] = "stained knit hat";

  thomsCloset[0][0]; //first element in Thom's shirts
  thomsCloset[1][0]; //first element in Thom's pants
  thomsCloset[2][0]; //first element in Thom's accessories

  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}`);
  thomsCloset[1][2] = "Footie Pajamas";

  //        IV. Functions
  //        IV. A printGreeting

const printGreeting = (name) =>
{
    return `Hello there, ${name}`;
}
console.log(printGreeting("Slimer"));

//      IV. B printCool
const printCool = (name) =>
{
    return `${name} is cool!`;
}
console.log(printCool("Captain Reynolds"));

//      IV. C calculateCube
const calculateCube = (num) =>
{
    return num * num * num;
}
console.log(calculateCube(5));

//      IV. D isVowel
const isVowel = (character) =>
{
    if(character == 'A' || character == 'a' || character == 'E' || character == 'e' || character == 'I' || character == 'i' || character == 'O' || character == 'o' || character == 'U' || character == 'u')
    {
        return true;
    } else
    {
        return false;
    }
}
console.log(isVowel("a"));

//      IV. E getTwoLengths
const getTwoLengths = (wordOne, wordTwo) =>
{
    let lengthList = [];
    lengthList.push(wordOne.length);
    lengthList.push(wordTwo.length);
    return lengthList;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//      IV. F getMultipleLengths
const getMultipleLengths = (wordList) =>
{
    let wordLengthList = [];
    for(let i = 0; i < wordList.length; i++)
    {
        wordLengthList.push(wordList[i].length);
    }
    return wordLengthList;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//      IV. G maxOfThree
const maxOfThree = (num1, num2, num3) =>
{
    var largestNum = num1;
    if(num2 >= largestNum)
    {
        largestNum = num2;
    }
    if (num3 >= largestNum)
    {
        largestNum = num3;
    }
    return largestNum;
}
console.log(maxOfThree(7, 8, 3));

//      IV. H printLongestWord
const printLongestWord = (arr) =>
{
    let longString = "";
    for(let i = 0; i < arr.length; i++)
    {
        if(longString.length < arr[i].length)
        {
            longString = arr[i];
        }
    }
    return longString;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//      OBJECTS

//      A. MAKE A USER OBJECT

const user = 
{
    userName: "Their name",
    email: "somethingsomething27@gmail.com",
    age: 21,
    purchased: []
};
console.log(user.email);

//      B. UPDATE THE USER
user.email = "newemailaddress@yahoo.com";
console.log(user.email);

user.age++;

//      C. ADDING KEYS AND VALUES
user.location = "United States";

//      D. SHOPABLIC
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

//      E. Object-within-object

user.friend = 
{
    friendName: "Friend Name",
    age: 22,
    location: "United states",
    purchased: []
};

console.log(user.friend.friendName);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

//      F. Loops
for(let i = 0; i < user.purchased.length; i++)
{
    console.log(user.purchased[i]);
}

for(let i = 0; i < user.friend.purchased.length; i++)
{
    console.log(user.friend.purchased[i]);
}

//      G. FUNCTIONS CAN OPERATE ON OBJECTS
const updateUser = () =>
{
    user.age++;
    user.userName.toUpperCase();
}

const oldAndLoud = (person) =>
{
    person.age++;
    person.userName.toUpperCase();
}
oldAndLoud(user);
console.log(user);