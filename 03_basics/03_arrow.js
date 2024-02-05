const user = {
    username: "vanshika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sehgal"
// user.welcomeMessage()

// console.log(this)

function one(){
    let username = "vanshika"
    console.log(this.username)
}

// one()

const two = function(){
    let username = "vanshika"
    console.log(this.username)
    // console.log(this)
}

// two()

const three =  () => {
    let username = "vanshika"
    // console.log(this.username)
    console.log(this)
}

// three()

// arrow function
// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // no need for return keyword

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "vanshika"}) // () is must

console.log(addTwo(3, 4))

