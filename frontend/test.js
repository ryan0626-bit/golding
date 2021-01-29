const range = require("lodash/range");
//smaller just to see easier
range(1,17).map((number) => {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz: ", number);
 }
      else if (number % 5 === 0) {
         console.log("buzz: ", number);
  }
       else if (number % 3 === 0) {
         console.log("Fizz: ", number);
  }
    else {
        console.log(number)
    }
});
//remeber number % 3 DOES NOT say if it is divisible by 3, all it does is give the remainder of the divisor. so 8 %3. 3 goes in twice evenly leaving 6. The remainder of 8-6 is 2
// so if you want to know if 8 is divisible by 3 it is NOT 8%3 since that would return 2 which is truthy
// it would be 8%3===0 which returns a boolean
// you don't need a return... 8%3===0  that is a return in and of itself of a boolean, so it transforms into either
// if(number%3===0)  will end up being if(true)  or if(false)
//you didnt save


// no it should look like this
// 1
// 2
// Fizz: 3
// 4
// Buzz: 5
// Fizz: 6
// 7
// 8
// Fizz: 9
// Buzz: 10
// 11
// Fizz: 12
// 13
// 14
// FizzBuzz: 15
// etc...






//Print Fizz: + Number if divisible by 3
//Print Buzz: + Number if divisible by 5
//Print FizzBuzz: + Number if divisible by both 3 and 5
//Print Number only if its not divisbile by 3 and 5

