// if

const isUserLoggedIn = true
const temperature = 51

// if(temperature<50){
//     console.log("less than 50")  
// }
// else{
//     console.log("greater than 50")
// }

const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`)

const balance=1000

// if(balance>500) console.log("test"),  // unreadable
// console.log("test2"); 

// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}