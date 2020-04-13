const person = {
    name : 'Edward',
    age : 2,
    greet(){
        console.log('Hi, I am ' +  this.name)
    }
}

// Use Object destructuring to avoid passing unnecessary data
// Use curly braces to specify the incoming object that we're interested in
const printName = ({ name }) => {
    console.log(name)
}


printName(person)

// Curly braces on the left of the decleration for destructuring
// Here I am creating 2 new constants by destructuring the person object
const {name,age} = person;

// Destructure Arrays
const hobbies = ['Rugby', 'Going to the gym', 'Coding'];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2)