const user ={
    username: "vanshika",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
    }
}

console.log(user.username)
console.log(user.getUserDetails())