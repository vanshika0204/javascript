// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const one = new User("Vanshika", "123@example.com", "123")
// console.log(one.encryptPassword())
// console.log(one.changeUsername())

//behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}abc`
}

const one = new User("Vanshika", "123@example.com", "123")

console.log(one.encryptPassword())
console.log(one.changeUsername())