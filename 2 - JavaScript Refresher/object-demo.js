const person = {
    name : 'Edward',
    age : 2,
    greet(){
        console.log('Hi, I am ' +  this.name)
    }
}

const hobbies = ['Rugby', 'Going to the gym', 'Coding'];

// Simple array loop using let
// for (let hobby of hobbies) {
//     console.log(hobby)
// }

// console.log(hobbies.map(hobby =>  'Hobby: '  + hobby));
//person.greet();

//Adds an item to the array without changing the origional
hobbies.push('Zoom')
console.log(hobbies)