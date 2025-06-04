"use strict";

// function logger() {
//   console.log("My name is Nika");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and 
//   ${oranges} oranges.`;

//   return juice;
// }



// const appleAndOrangeJuice = fruitProcessor(5, 3);
// console.log(appleAndOrangeJuice);

// const orangeJuice = fruitProcessor(0, 3);
// console.log(orangeJuice);


// // function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2004);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2005);
// console.log(age1, age2);




// // ARROW FUNCTION

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetierement = (birthYear, firstName )=> {
//     const age = 2037 - birthYear;
//     const retierement = 65 - age;
//     // return retierement;
//     return `${firstName} retires in ${retierement} 
//     years`;
// }

// console.log(yearsUntilRetierement(1991, 'Jonas'));
// console.log(yearsUntilRetierement(1980, 'Bob'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces =  cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of 
  apples and pieces of ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));