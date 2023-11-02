const pig = {
    name: 'Kiwi',
    type: 'pig',
    age: 2,
    makeSound: () => console.log(`${pig.name} is ${pig.age} years old ${pig.type} and says oink`)
}

const dog = {
    name: 'Toby',
    type: 'dog',
    age: 3,
    makeSound: () => console.log(`${dog.name} is ${dog.age} years old ${dog.type} and says woof`)
}

const sheep = {
    name: 'Poyo',
    type: 'sheep',
    age: 4,
    makeSound: () => console.log(`${sheep.name} is ${sheep.age} years old ${sheep.type} and says baa`)
}

pig.makeSound();
dog.makeSound();
sheep.makeSound();