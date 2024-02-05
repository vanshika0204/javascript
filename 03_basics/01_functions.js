function sayMyName(){
    console.log("V")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("K")
    console.log("A")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

// const result = addTwoNumbers(3, 5)
// console.log("result: ", result)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    // console.log("vanshika")

    return number1 + number2
}

// const result = addTwoNumbers(3, 5)
// console.log("result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){  // if(!username)
    //     console.log("Please enter a username")
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vanshika"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// function calculateCartPrice(num1){
//     return num1
// }

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Vanshika",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject({
    username: "sehgal",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 500, 1000]))