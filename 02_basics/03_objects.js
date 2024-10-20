// literal
//constructor


//singleton
//Object.create()

const mysym=Symbol("key1")

const jsuser={
    name:"Ashish",
    age:18,
    [mysym]:"mykey1",
    "full name":"Ashish sharma",
    location:"etawah",
    email:"ashishsharma9h@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}

// console.log(jsuser.name);
// console.log(jsuser["name"]);
// console.log(jsuser["full name"]);
//console.log(jsuser[mysym]);
  
// jsuser.email="Aman";
// Object.freeze(jsuser);
// jsuser.email="ashish";
// console.log(jsuser);



jsuser.greeting=function(){
    console.log(`hello ${this.name}`);
}
console.log(jsuser.greeting());



