let a = 10
const b = 20
var c = 30

if(true){
    let a = 100
    const b = 200
    // var c = 300 and c = 300 will also give same result
    // console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Vanshika"

    function two(){
        const website = "github"
        console.log(username)
    }
    // console.log(website)

    // two()
}

// one()

if(true){
    const username = "vanshika"
    if(username === "vanshika"){
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)

//**** interesting ****

// console.log(addone(5))

function addone(num){
    return num+1
}

// addone(5)

// addtwo(5)

const addtwo = function(num){ // function as a variable
    return num +2
}

// addtwo(5)