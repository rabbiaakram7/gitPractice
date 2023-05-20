//1
const number=[10,20,30,40,50];
console.log(number[3]);

//2
const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits.length);

//3
const numbers = [10, 20, 30, 40, 50];
numbers.push(60)
console.log(numbers);


//4
const fruits1 = ["apple", "banana", "cherry", "date"];
console.log(fruits1.pop());

//5
const numbers1 = [10, 20, 30, 40, 50];
numbers1.shift()
console.log(numbers1);

//6
const fruits2 = ["apple", "banana", "cherry", "date"];
fruits2.unshift("orange")
console.log(fruits2);


//7
const numberss1 = [10, 20, 30];
const numbers2 = [40, 50, 60];
const array= numberss1.concat(numbers2);
console.log(array);

//8
const fruits3 = ["apple", "banana", "cherry", "date"];
console.log(fruits3.slice(1,3));

///9
const numbers4 = [10, 20, 30, 40, 50];
numbers4.splice(2,2,35,45)
console.log(numbers4);

//10
const names = ["Alice", "Bob", "Charlie", "Dave"];
names.forEach(element => console.log(element));


//11
/* const numbers5 = [1, 2, 3, 4, 5];
const roots = numbers.map((num) => Math.sqrt(num)); */

//12
const numbers5 = [10, 20, 30, 40, 50];
const initialValue =0;
const sumWithInitial=numbers5.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue);
console.log(sumWithInitial);

//13
const ages = [15, 25, 12, 30, 17, 20];
const adultAge = ages.filter(ages=> ages > 18);
console.log(adultAge);



//14
const sentence = "This is a sample sentence.";
const words=sentence.split(" ");
console.log(words);

//15
const sentence2 = "I like to eat apple. Apple is a delicious fruit."
console.log(sentence2.replace("apple","orange"));

//17
const sentence3 = "I like to eat orange. Orange is a delicious fruit.";
console.log(sentence3.search("orange"));

//18
const word = "JavaScript";
const index = 5;
console.log(word.charAt(index));

//19
const sentence4 = "Hello, how are you doing today?";
console.log(sentence4.startsWith("Hello"));

//20
const sentence5 = "   Hello, how are you doing today?    ";
console.log(sentence5.trim());








