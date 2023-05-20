//q1
const name="Alice";
const age=30;
console.log(`My name is ${name} and I am ${age} years old`);
//q2
let variable1;
let variable2=null;
console.log(variable1,variable2);


//q3
/* const PI=3.14;
const PI=55; */


//Q4
/*var varVariable ="I am declared with var";
let letVariable="I am declared with let";
console.log(varVariable,letVariable);*/

{
    var varVariable ="I am declared with var";
let letVariable="I am declared with let";
}
console.log(varVariable,letVariable);


//Q5
const agee=25;
if(agee>18)
{
    console.log("You are an adult" );
}
else{
    console.log("You are a minor");
}

//Q6
let ageeee=10;
if (ageeee==18){
    console.log('you are going to be adult soon');

}else if(ageeee<=0){
        console.log('Invalid age');
    }