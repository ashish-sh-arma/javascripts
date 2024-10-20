const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heros.push(dc);
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// const all=marvel_heros.concat(dc);
// console.log(all);

const all=[...marvel_heros,...dc]
console.log(all);

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another.flat(Infinity);
console.log(real);




console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"));
console.log(Array.from({name:"Ashish"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
