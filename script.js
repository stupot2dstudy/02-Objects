"use strict";
//Const to find is able to vote
const oldEnough = 18;

//List of the user
const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

//Const to make the object an array
//Old wat
const peopleArray = [];
const peopleEntries = Object.entries(people);

for (let i = 0; i < peopleEntries.length; i++) {
  const [name, age] = peopleEntries[i];
  const person = {
    name: name,
    age: age,
  };
  peopleArray.push(person);
}

/*New way*/
// const peopleArray = Object.entries(people).map(([name, age]) => ({
//   name,
//   age,
// }));

//Function to find check the age to vote

function checkAge(name, age) {
  if (age >= oldEnough) {
    return `${name} is old enough to vote.`;
  } else {
    return `${name} is not old enough to vote.`;
  }
}

// Verify age for each person in the array
for (const person of peopleArray) {
  console.log(checkAge(person.name, person.age));
}
