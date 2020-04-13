const name = "Edward";
let age = 24;
const hasHobbies = true;

age = 30;

const summariseUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", " +
    "age is " +
    userAge +
    ", " +
    "use has hobbies " +
    userHasHobbies
  );
};

// Quick Implementation of an arrow function
const addOne = (a) => a + 1;

console.log(addOne(1));

console.log(summariseUser(name, age, hasHobbies));
