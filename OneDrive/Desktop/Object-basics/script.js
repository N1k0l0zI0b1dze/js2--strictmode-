"use strict";




// console.log(nikoloz.lastName);
// console.log(nikoloz["lastName"]);


// const nikoloz = {
//   firstName: "Nika",
//   lastName: "Ioooo",
//   birthYear: 2004,
//   job: "student",
//   friends: ["arthur", "dutch", "john"],
//   hasDriversLicense: true,

// //   calcAge: function(birthYear){
// //     return 2025 - birthYear;
// //   }
  
//   calcAge: function() {
//     console.log(this);
//     return 2025 - this.birthYear;
//   }
  
// };




// console.log(`I have ${nikoloz.friends.length} friends, and my best friend is called ${nikoloz.friends[0]}`);


// console.log(nikoloz.calcAge());



// console.log(nikoloz['calcAge'](1991));

const array = [
  "nika",
  "iobidze",
  2025 - 2004,
  "student",
  ["arthur", "morgan", "good"],
  true,
  false
];

const types = [];

for(let i = 0; i < array.length; i++) {
  console.log(array[i], typeof array[i]);

  types.push(typeof array[i]);
}

console.log(types);


const years = [2001, 2002, 2003, 2004, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log(ages);


let dice = Math.trunc(Math.random() * 6) + 1; 