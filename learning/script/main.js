// ? بسم الله الرحمن الرحيم
// ! Welcome To My JS Learning File

// * * Tips before starting
/*
?1.foucs.
?2.always search.
?3.ask how to fix not to fix.
?4.start an Idea.
?5.do your assginments and tasks.
?6.sumbit your work on face book.

!thees tips are very important
*/
// window.alert ("#free plastine.")  //used to make a lert in your page like:(text, numbers, sum, divide, minues)
// ##################################
// document //*(its the mian page the whole it.)
// document.write("to add an elemnt to the web page.") //!NOT RECOMMEND
// document.createElement("to add a elemnt to the html page ") //*(to add a elemnt to the html page )*//
//!RECOMMEND
// ##################################
// console.log("text, numbers, sums, divide, by") //*(to print a text, number to the console) //!
//!cool to use
// ##################################
// ? you can use the console for diffrent things like
// console.log(log)    //!not used today
//console.error(error) //!to display your error in code
// console.table([mohammad, 13, moaz, adam]) //!to make a table in the console ==> array
// console.log("%cFree %cPlastine", "color:green; font-size:40px;", "color:red; font-size:40px;")
//!used to print word or number with style the (%C is a directave used to choose a style.)
// ################################################################################################
// !theres a lot of data types in js
// ?to know your data type use:-

// console.log(type of "the thing") //!it will print the data type

//* Numbers:
// let length = 16;
// let weight = 7.5;

//* Strings:
// let color = "Yellow";
// let lastName = "Johnson";

//* Booleans
// let x = true;
// let y = false;

//* Object:
// const person = {firstName:"John", lastName:"Doe"};

//* Array object:
// const cars = ["Saab", "Volvo", "BMW"];

//* Date object:
// const date = new Date("2022-03-25");
// #################################################################
// !VARIABLES
// *you can use a var to store data like:-
// var name = "mohammad"
// var age = 13

// ! the var elemnet you should not use it you shoul use (const, let)
// ##################################################################
// concatenation

// const a = "we love";
// const b = "Plastine";

// console.log(a, b); //!it will print we love plastine
// ###################################################################
//*Template Literals (Template Strings)*/
/*
//! First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a = " \"\" " + b +
"\n" + c + " " + d);

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

//! Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);*/
// #########################################
// !operates
/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

// *console.log(10 + 20);
//* console.log(10 + "Osama");

//* console.log(10 - 20);
//* console.log(10 - "Osama"); // NaN
//* console.log(typeof NaN);

//* console.log(10 * 20);
//* console.log(10 * -20);

//* console.log(20 / 5);
//* console.log(20 / 3);

//* console.log(2 ** 4);
//* console.log(2 * 2 * 2 * 2);

// *console.log(10 % 2);
//* console.log(11 % 2); // Remove 1
// ################################################
/*
 ! - + Unary Plus [Return Number If Its Not Number]
 ! - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  ?- Normal Number
 ? - String Number
 ? - String Negative Number
 ? - String Text
 ? - Float
 ? - Hexadecimal Numeral System => 0xFF
 ? - null
 ? - false
 ? - true
*/

//* console.log(+100);
//* console.log(+"100");
//* console.log(+"-100");
//* console.log(+"Osama");
//* console.log(+"15.5");
//* console.log(+0xff);
//* console.log(+null);
//* console.log(+false);
//* console.log(+true);

//* console.log(-100);
//* console.log(-"100");
//* console.log(-"-100");
//* console.log(-"Osama");
//* console.log(-"15.5");
//* console.log(-0xff);
//* console.log(-null);
//* console.log(-false);
//* console.log(-true);

//* console.log(Number("100"));
// ############################################
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

// let a = "100";
// let b = 20;
// let c = true;

// console.log(+a + b + c);

// ###############################################
/*
  Assignment Operators
*/

// let a = 10;

// a = a + 20;

// a = a + 70;

// a += 100; // a = a + 100

// a -= 50; // a = a - 50

// a /= 50; // a = a / 50