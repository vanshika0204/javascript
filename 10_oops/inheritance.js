class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const first = new Teacher("vanshika", "sehgal@example.com", "123")

first.addCourse()

const second = new User("Vanshika")

second.logMe()

// console.log(first===Teacher)

console.log(first instanceof Teacher)
console.log(first instanceof User)