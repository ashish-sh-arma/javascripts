const user={
    username:"ashish",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username="sharma"
// user.welcomemessage()

//console.log(this);

// function chai(){
//     let username="ashish"
//     console.log(this);
    
// }
// chai()

// const chai=function(){
//     let username="ashish"
//     console.log(this.username);
// }

const chai=()=>{
    let username="ashish"
    console.log(this);
}
//chai()



// const addtwo=(num1,num2)=>{
//     return num1+num2; explicit return is required
// }


const addtwo=(num1,num2)=> num1+num2;//implicit - return is not required

//console.log(addtwo(4,5));


