// singleton
// Object create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vanshika",
    "full name": "Vanshika Sehgal",
    [mySym]: "mykey1",
    age: 19,
    location: "Gurugram",
    email: "sehgalvanshika709@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}



console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser.full name) // not possible
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email = "vanshika@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "vanshikasehgal@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())