
//objects

//singleton

//object literals
//Object.create

const mySym = Symbol("key1")



const JsUser = {
    name : "Mayank",
    "full name " : "Mayank Digarse",
    [mySym]:"mySym1",
    age: 18,
    location: "Indore",
    email: "mayankdigarse21@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday" , "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser['full name '])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greetingTwo());