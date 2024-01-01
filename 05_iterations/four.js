// const myObject = {
//     js:'javascript', 
//     cpp: 'C++',
//     rb : "ruby",
//     swift: "swift by apple",
// }
// for (const key in myObject) {
//    console.log(myObject[key]);
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const map = new Map()
map.set('IN' , "India")
map.set('Fr' , "France")
map.set('IN' , "India")

for(const key in map){
    console.log(key);
}

