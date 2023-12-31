// const userEmail = "mayank.ai"

// if(userEmail){
//     console.log("Got user Email");
// }
// else {
//     console.log("Don't have user email");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//NUllish Coalescing Operator (??): null undefined

let val1;
val1 = 5?? 10

console.log(val1);