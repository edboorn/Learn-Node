const person = {
    name : 'Edward',
    age : 2,
    greet(){
        console.log('Hi, I am ' +  this.name)
    }
}

const hobbies = ['Rugby', 'Going to the gym', 'Coding'];

// Immutability - Where you don't edit the origional values, but create a new array and copy the old + add the new

// ... Spread prevents this new array creation from creating an embedded array
const copiedArray = [...hobbies];
console.log(copiedArray)

