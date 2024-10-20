// console.log("a");
// console.log("s");
// console.log("h");
// console.log("i");
// console.log("s");
// console.log("h");



function saymyname(){
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
}

//saymyname;
//saymyname();

function addtwonumber(number1,number2){//parameters
    console.log(number1+number2);
    
}
// addtwonumber(3,"a")//arguments
// addtwonumber(2,"4")
// addtwonumber(4,3)

// const res=addtwonumber(5,3);
// console.log(res);


function addtwonumber(number1,number2){//parameters
    let res=number1+number2;
    return res    
}
const res1=addtwonumber(1,2)
console.log(res1);

function loginuser(name="sharma"){
    if(!name){
        console.log("please enter user name");
        return
    }
    return `${name} just loggedin`
}

console.log(loginuser());


