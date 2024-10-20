// literal
const tinderuse={}
//console.log(tinderuse);


// singleton or constructor
const user=new Object();
//console.log(user);

user.id="123";
user.name="Ashish"
user.islogged=false;

//console.log(user);

const newuser={
    id:123,
    fullname:{
        userfullname:{
            first:"ashish",
            last:"sharma"
        }
    },
    age:18
}
//console.log(newuser.fullname.userfullname.first);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2};
//console.log(obj3);
//  const obj3=Object.assign({},obj1,obj2);
//  console.log(obj3);
   const obj3={...obj1,...obj2}
   console.log(obj3);
   



   const users=[
    {
        id:1,
        email:"asjosj"
    },
    {
        id:2,
        email:"ashish"
    }
   ]

   console.log(users[1].email)


   console.log(user)
   console.log(Object.keys(user));
   console.log(Object.values(user));
   console.log(Object.entries(user));


   console.log(user.hasOwnProperty("isloggedin"));
   
   
   
   