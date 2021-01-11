// Iteration 1: Names and Input

// 1.1
var hacker1= "Paul";

//1.2
console.log(`The driver's name is ${hacker1}.`);

//1.3
var hacker2= "George";

//1.4
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

//2.1

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}characters.`)
}else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
  console.log(`Wow, you both have equally long names,${hacker1.length} characters!`)
};


// Iteration 3: Loops

//3.1
var letters = hacker1.toUpperCase().split("").join().replace(/,/g, ' ');

console.log(letters);

//3.2
var reversed= hacker2.split("").reverse().join("");

console.log(reversed);

//3.3
for (i=0; i<hacker1[i].length; i++){
  for (j=0; j<hacker2[j].length; j++){

if(hacker1[i] === hacker2[j]){
    console.log("What?! You both have the same name?");
    
  }else if(hacker1[i] < hacker2[i]){
    console.log ("The driver's name goes first.");
  }else{
    console.log("Yo, the navigator goes first definitely.");
  }
  }
  };

 