
const name = "ashwin";
const age = 30;

//concatenation
console.log('My name is ashwin '+name+" and I am "+age);

console.log(`My name is ${name} and im ${age} `);

const s = "tech,computer,it,code";

console.log(s.split(","))

const fruits = ['apple','oranges','pears'];

fruits[3] = 'grapes';

fruits.push('mangos','banana');

fruits.unshift('strwberries')
fruits.pop()
console.log(Array.isArray(fruits))

console.log(fruits.indexOf('apple'))

console.log(fruits)

const person = {
    firstName: 'Ashwin',
    lastName : 'Muthiah',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'110 main st',
        city:'Boston',
        states:'MA'
    }
}

console.log(person.firstName);
 person.address.city = 'Roxbury'
 console.log(person)


const todos = [
    {
        id:1,
        text:'Take trash out',
        isComplete:true
    },
    {
        id:2,
        text:'Boss meeting',
        isComplete:false
    },
    {
        id:3,
        text:'Dentist',
        isComplete:true
    }
 ]

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// for loop

for(let i=0;i<10;i++){
    console.log(i)
}

// while 
let i=0;
while(i<10){
    console.log(i)
    i++;
}


for (let i=0;i<todos.length;i++){
    console.log(todos[i])
}

for (let todo of todos){
    console.log(todo.text);
    break;
}

// foreach

const a = todos.forEach(function(todo) {
    console.log(todo.text);

});

//map
const b = todos.map(function(todo) {
    return todo.text;
});
console.log(b)


//filter
const c = todos.filter(function(todo){
    return todo.isComplete === false;
}).map(function(todo){
    return todo.text
})
console.log(c)

//if-else statements

const x = 4;
const y = 10;

if(x===5 || y>10){
    console.log('x is 5 or y is 10');
}
else if(x===4 && y===10){
    console.log('X is greater than 10');
}
else {
    console.log('x is lesser than 10');
}

// ternary operator
const x = 10;
const color = x > 10 ? 'red' : 'blue';
// if x>10 then red else blue