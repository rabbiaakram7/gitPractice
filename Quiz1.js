//Q1
let x = 20; 
if (x > 10) {
    console.log("Greater than 10");
} else {
    console.log("Less than or equal to 10");
}

//Q2
let r = 8;
let result = r % 2 === 0 ? "Even" : "Odd";
console.log(result);

//Q3
function sum(num1 , num2) {
    return(num1 + num2);
 }
 let add1=sum(10 , 80);
  console.log('Sum:',add1);

  //Q4
  let multiply=(a , b)=> a * b;

  //Q5
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    let square = array[i] * array[i];
    console.log(square);
}

//Q6
const array1 = [2, 4, 6, 8];
const doubledArray = array1.map(x => x * 2);
console.log(doubledArray);


//Q7
function getUniqueChars(str) {
    let uniqueChars = [];
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    return uniqueChars;
  }
  let string = "hello world";
let uniqueChars = getUniqueChars(string);
console.log(uniqueChars);
 //Q8
 let array2 = [3, 7, 1, 9, 2, 6];
let greater = array2.filter(function(x) {
    return x > 5;
});
console.log(greater);

//Q9
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare the reversed string with the original string
    return cleanStr === cleanStr.split('').reverse().join('');
  }

//Q10
let array3 = [1, 2, 3, 4, 5];
let mul = array3.reduce(function(numm1, numm2) {
    return numm1 * numm2;
}, 1);
console.log(mul);

//Q11 same as 5


//Q12 same as 6

//Q13 same as 7

//Q14 same as 8

//Q15 same as 9

//Q16 

let array4 = [3, 7, 9, 2, 6, 11];
let evenNumber = array4.find(function(num) {
    return num % 2 === 0;
});
console.log(evenNumber);

//Q17
function getUniqueValues(arr) {
    return [...new Set(arr)];
  }
  console.log(getUniqueValues([1, 2, 3, 2, 1, 4, 5, 4]));
//Q18
const sentence = "JavaScript is awesome";
const words=sentence.split(" ");
console.log(words);

//Q19 same as 18

//Q20
//part1
//option c is correct
//part2
//Option b is correct

//part3  //option b is coorect
const nums = 10;

const myFunction = () => {
  const nums = 5;
  console.log(nums);
};

myFunction();

//Q21
function isInArray(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() === str.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  let fruits = ["apple", "banana", "cherry", "date"];
let search = "Cherry";
let result1 = isInArray(fruits, search);
console.log(result1);

//Q22
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  let str = "Hello world";
let char = "o";
let count = countOccurrences(str, char);
console.log(count);