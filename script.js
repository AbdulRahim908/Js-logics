//function to add two numbers
const sum=(a,b)=>{
    // a=parseInt(prompt("enter first number:"));
    // b=parseInt(prompt("enter second number:"))
    return a+b;
}
let c=sum(2,3);
console.log(`sum of a and b is ${c}`);
//function to find sqrt
let squareR=(j)=>{
    return j**1/2;
}
let d= squareR(12)
console.log(d);

//prime number
let number=7;
isPrime=true;
if (number===1){
    console.log("number is neither composite nor prime");
}
else if (number>1){
    for(let i=2;i<number;i++){
        if(number%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is prime`)
    }
    else{
        console.log(`${number} is not prime`)
    }
}