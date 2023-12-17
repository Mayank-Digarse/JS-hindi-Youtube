
//functions


function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
    }
    
sayMyName();

function addTwoNum(number1 , number2){
   let result = number1+number2
   return result
}

const result =  addTwoNum(6,10)

console.log("Result :" , result)

function loginUserMessage(username){
        if(username === undefined){
            console.log("Please enter a username");
            return ;
        }


    return `${username} just logged in`
}

console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,455,677))

const user = {
    username : "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

//handleObject(User)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200,300,500,800]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));