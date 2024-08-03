// 1. Primitive data type (Call by value)

// 7 tyepes : String, Number, Bollean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 103.2
const isLoggedIn = false
const ousideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

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

console.log(typeof myFunction)
console.log(typeof null)
console.log(typeof person)