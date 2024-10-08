// dates


// let mydate=new Date();
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(typeof(mydate))


//let crdate= new Date(2023,2,23)


//let crdate= new Date(2023,2,23,5,3)

//let crdate= new Date("2023-01-14")
let crdate= new Date("01-14-2024")
//console.log(crdate.toLocaleString());

let mytimestamp=Date.now();
//console.log((mytimestamp/1000));



let date=new Date();
console.log(date);
console.log(date.getMonth()+1);
console.log(date.getDay());



console.log(date.toLocaleString('default',{
    weekday:"long"
}))




