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


function calculate(val1,val2,...num1){//rest sometimes spread
    return num1
}

console.log(calculate(200,400,500,600));


const user={
    username:"ashish",
    price:199
}

function handleobject(anyobject){
    console.log(`username ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleobject(user)

handleobject({
    username:"ashish",
    price:399
})

const newarr=[200,400,600]
function returnsec(getarray){
    return getarray[1];
}

console.log(returnsec(newarr));

console.log(returnsec([3,2,4,2]));




