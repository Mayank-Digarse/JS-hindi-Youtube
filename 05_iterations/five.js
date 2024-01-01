 const coding = ["js" , "ruby" , "java" , "cpp"];

// coding.forEach( function  greet(val){
//     console.log(val)
// } )

function printMe(item){
    console.log(item);
}

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName ) ;
    console.log(item.languageFileName);
})
