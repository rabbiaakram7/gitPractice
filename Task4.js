//Q1
function sumOfEvenNumbers(arrayy) {
    var sum1 = 0;
    for (var j = 0; j < arrayy.length; j++) {
      if (arrayy[j] % 2 === 0) {
        sum1 += arrayy[j];
      }
    }
    return sum1;
  }
  var numbers1 = [1, 2, 3, 4,6,7,8,9];
console.log(sumOfEvenNumbers(numbers1));

//Q2
const expenses = {
    rent: 1000,
    groceries: 250,
    transportation: 150,
    utilities: 200,
    entertainment: 100
  };

  function SumExpenses (expenses){
    let sumE=0;
    for (let u in expenses){
        sumE=sumE+expenses[u]
    }
    return sumE
  }
  const expResult=SumExpenses(expenses)
  console.log(expResult)



//Q3
function squareArray(arrS) {
    var output = [];
    for (var n = 0; n < arrS.length; n++) {
      output.push(arrS[n] * arrS[n]);
    }
    return output;
  }
  var numb1 = [ 2,3,1, 4, 5];
  console.log(squareArray(numb1));  

//Q4
const salesReport = {
    january: 50,
    february: 70,
    march: 90,
    april: 65,
    may: 80
  };

  function SumSales (salesReport){
    let sumSaleReport=0;
    for (let z in salesReport){
        sumSaleReport=sumSaleReport+salesReport[z]
    }
    return sumSaleReport
  }
  const salesResult=SumSales(salesReport)
  console.log(salesResult)

//Q5
const books = [
    { title: 'The Great Gatsby', price: 10 },
    { title: 'To Kill a Mockingbird', price: 8 },
    { title: 'Pride and Prejudice', price: 12 },
    { title: '1984', price: 15 },
    { title: 'The Catcher in the Rye', price: 9 }];
  

  function sumBooks (books){
    let sumSaleReport=0;
    for (let b of books){
        sumSaleReport=sumSaleReport+b.price
    }
    return sumSaleReport
  }
  const booksResult=sumBooks(books)
  console.log(booksResult)

//Q6
function sumOfOddNumbers(arr1) {
    var k = 0;
    var sum = 0;
    while (k < arr1.length) {
      if (arr1[k] % 2 !== 0) {
        sum += arr1[k];
      }
      k++;
    }
    return sum;
  }
  var numberss = [3, 2, 5, 4, 7, 6, 7];
console.log(sumOfOddNumbers(numberss));
//Q7
function factorial(n) {
    if (n < 0) {
      return null;
    }
    var res = 1;
    for (var i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }
  console.log(factorial(10));