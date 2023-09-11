"use strict";

// let nums = [2, 5, 3, 4, 7];

// function checkOddNums(num) {
//   return num % 2 === 1;
// }

// function checkEvenNums(num) {
//   return num % 2 === 0;
// }

// function sumOfOddNumbers(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 1) {
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }

// function sumOfOddNumbers(numbers, callback) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (callback(numbers[i])) {
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }

// function sumOfEvenNumbers(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }

// function sumOfNumsGreaterSix(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }

// sumOfOddNumbers(nums);
// sumOfOddNumbers(nums, checkOddNums);
// sumOfEvenNumbers(nums);
// sumOfNumsGreaterSix(nums);

// function calculateNums(numbers, callback) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (callback(numbers[i])) {
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }
// let nums = [2, 5, 3, 4, 7];

// calculateNums(nums, (m) => m > 4);

// calculateNums(nums, checkOddNums);
// calculateNums(nums, checkEvenNums);

// function divide(a, b, errorCallback, successCallback) {
//   if (b == 0) {
//     errorCallback("Cant be divide to zero");
//   } else {
//     let result = a / b;
//     successCallback(result + "divided");
//   }
// }

// function getError(error) {
//   console.log("error:" + error);
// }

// function getSuccess(success) {
//   console.log("success:" + success);
// }

// divide(5, 7, getError, getSuccess);

// let text = "Yasha Azerbaycan Azer";

// console.log(text.length);

// console.log(text.slice(-4, -1));

// console.log(text.substring(0, 5));

// console.log(text.substr(0, 5));

// console.log(text.replace("Azer", "test"));

// let result = text.replaceAll("Azer", "Test");

// console.log(result);

// let test = text.slice(1, 3);
// console.log(text);

// let text1 = "Hello World";
// let text2 = text1.toUpperCase();
// console.log(text2);

// let name = "Pervin";

// let surname = "Mirzeyev";

// let result = name.concat("-", surname);

// console.log(result);

// let text1 = "Salam";

// let text2 = "    Salam";

// console.log(text1 == text2);

// console.log(text1 == text2.trim());

// console.log(text1.charAt(1));
// console.log(text1.charCodeAt(1));

// document.onkeydown = function (e) {
//   if (e.keyCode == 13) {
//     alert("pressed enter");
//   }
// };

// let text = "Yashasin,Azerbaycan dovleti";

// for (let i = 0; i < text.length; i++) {
//   if (text[i] == "c") {
//     console.log("yes");
//   }
// }

// let data = text.split(",");

// console.log(data);

// data.forEach((element) => {
//   console.log(element);
// });

// let numbers = [1, 2, 3, 4, 5];
// numbers.push(100);
// numbers.unshift(100);
// numbers.pop();
// numbers.shift();

// console.log(numbers.length);
// let res = numbers.toString();

// console.log(res);

// let nums = "4,5,6,7,8";

// let result = numbers.join("-");

// console.log(result);

// let arr2 = numbers;

// arr2[0] = 100;

// console.log(arr2);
// console.log(numbers);

// let num1 = 5;
// let num2 = num1;

// num1 = 100;

// console.log(num1);
// console.log(num2);

// let numbers = [1, 2, 3, 4, 5];

// delete numbers[0];

// console.log(numbers);

// const nums = [1, 2, 3];

// nums[0] = 100;
// nums.push(30);

// console.log(nums);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2);
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);

// console.log(fruits);
// console.log(citrus);

// let address = "ahmadli";
// console.log(address.includes("a"));

let nums = [1, 2, 3, 4, 5];

// console.log(nums.includes(2));

// nums.forEach((element) => {
//   console.log(element);
// });

// let filteredDatas = nums.filter((m) => m >= 3 && m < 5);

// console.log(filteredDatas);

// let result = nums.find((m) => m > 4);

// console.log(result);

// let result = nums.findIndex((m) => m == 5);

// console.log(result);

// let text = "Lorem ipsum is simply. Dummy text of the printing";

// const makeSubstring = (text) => {
//   let textArray = text.split("");

//   let substringIndex = textArray.findIndex((m) => m == "D");

//   //   console.log(substringIndex);

//   let substringText = text.substring(0, substringIndex);

//   return substringText;
// };
// let result = makeSubstring(text) + "....";
// document.querySelector("h1").innerText = result;
// console.log(makeSubstring(text));

let ages = [20, 23, 25, 26];

// let result = ages.map(function (elem) {
//   return elem * 2;
// });

let result = ages.map(function (elem) {
  if (elem % 2 == 0) {
    return elem * 2;
  } else {
    return elem;
  }
});

ages.forEach((element, index) => {
  ages[index] = element * 2;
});

console.log(ages);
// console.log(result);
