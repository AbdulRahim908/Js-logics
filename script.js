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
let number=3;
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

//function of celsius to fareheight
let temp=(cel)=>{
    let a=(cel*1.8)+32;
    return a;
}
console.log(`temperature in Farenheight is ${temp(22)}F`);

//table
const num=3;
for(let i=1;i<=10;i++){
    const result= i * num;
    console.log(`${num} x ${i} = ${result}`);
}

//Searchings
//Linear search
let linearSearch=(arr,key)=>{
    
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === key){
                return i
            }
        }
        return -1
    
}
    arr=[1,3,5,8,9]
    key=9
    console.log("The element index:"+linearSearch(arr,key))


//Sorting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const ints=[2,6,1,9,3,2,5]
ints.sort();
console.log(ints);
// console.log(q);