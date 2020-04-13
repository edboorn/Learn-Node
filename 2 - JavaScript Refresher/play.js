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

console.log(summariseUser(name, age, hasHobbies));
