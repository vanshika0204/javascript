// Immediately Invoked Function Expressions (IIFE) (to execute function immediately)
// ()()
// first () for function definition
// second () for function execution
// also used for removing pollution of global scope(or to differentiate with global scope variables)
// ; should be used to stop the execution if IIFE

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

( () => {
    //simple IIFE
    console.log(`DB CONNECTED TWO`)
} )();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('vanshika')