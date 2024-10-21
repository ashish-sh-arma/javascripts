if(true){
    let a=10
    const b=20
    var c=30
}

//console.log(a);  give error not defined
//console.log(b);   give error not defined
//console.log(c); //not give error as this is declared as global



// nested scope

function one(){
    const username="ashish"
    function two(){
        const website ="youtube"
        //console.log(username);
        
    }
    //console.log(website);
    two();
    
}
one()
//two()




if(true){
    const username="ashish"
    if(username==="ashish"){
        const website="youtube"
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);



// intresting --------------------

function addone(num){
    return num+1;
}
addone(5);


//addtwo(5)
const addtwo=function(num){
    return num+2
}
addtwo(5)
console.log(addtwo(5));


