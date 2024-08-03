// 1. Primitive data type (Call by value)

// 7 tyepes : String, Number, Bollean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 103.2
const isLoggedIn = false
const ousideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id==anotherId)

//2. Reference data type (Non primitive)

//Array, Objects, Functions

const heros =["Shaktiman", "Shakal", "doga"]
const person ={
    name:"Pravin",
    age:30
}

const myFunction = function(){
    console.log("Hello Javascript")
}

// console.log(typeof myFunction)
// console.log(typeof null)
// console.log(typeof person)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//************MEMORY *************/

// Stack (Primitive), Heap(Non-Primitive)

let myTubeChannel ="pravinbhosaleyoutube"
let anotherName = myTubeChannel
anotherName = "chaiaurcode"
// console.log(myTubeChannel)
// console.log(anotherName)

const user1 ={
    name:"pravin",
    email:'abc@google.com'
}

const user2 =user1

user2.email = 'xyz@google.com'

console.log(user1.email)
console.log(user2.email)

