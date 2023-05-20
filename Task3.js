//Q1
function sum(num1 , num2) {
   return(num1 + num2);
}
let add1=sum(10 , 80);
 console.log('Sum:',add1);
 //Q2
 const isEven=(num)=>{
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
 }
 console.log(isEven(6));
//Q3
 let multiply=(a , b)=> a * b;
 //Q4
 function add(a , b){
    return a +  b;
    }
//Q5
function calculateArea(base , height=5){
    return(base * height) / 2;

}
console.log(calculateArea(20));
//Q6
const countDown=(n)=>{
    console.log(n);
    const numm=n-1;
    if (numm>0){
        countDown(numm);
    }
}
countDown(5);