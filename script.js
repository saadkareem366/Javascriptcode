//****************QUESTION 1**********

// const findPeak = (arr, n) => {
//   if (n === 1) {
//     return arr[0];
//   }

//   if (arr[0] >= arr[1]) {
//     return arr[0];
//   }
//   if (arr[n - 1] >= arr[n - 2]) {
//     return arr[n - 1];
//   }

//   for (let i = 1; i < n - 1; i++) {
//     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
//       return i;
//     }
//   }

//   return -1;
// };

// let n = 5;
// let arr = [1, 5, 3, 4, 2];

// console.log(findPeak(arr, n));

//*********************** question 2 *************

//const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// const arr = [3, -1, 4, -2, 5, -9, 2, -6, 5, 3];
// const arr = [7, -3, 0, -8, 2, -5, 9, -1, 4, -6];
// const arr = [-10, 8, -2, 4, -6, 5, -7, 3, -1, 2];
// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(min, max);

//*****************************QUESTION 3***************************

// reverseWord(str){
//     let reverseStr='';

//     let len=str.length;

//     for(let i=len-1;i>=0;i--)
//     {
//         reverseStr+=str[i];
//     }

//     return reverseStr;
// }

//************************QUESTION 4***************

// sortArr(n, arr) {
//     // code here

//     for(let i=0;i<n;i++)
//     {
//         let flag=false;

//         for(let j=0;j<n-i-1;j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 const temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//                 flag=true;
//             }
//         }

//         if(!flag)
//         {
//             break;
//         }
//     }

//     return arr;
// }

//********************************question 5*************************

// const kthSmallest = (arr, k) => {
//   arr.sort((a, b) => {
//     a - b;
//   });

//   return arr[k - 1];
// };

// let arr = [0, 1, 5, 3, 10, 30, 20];
// let k = 4;

// console.log(kthSmallest(arr, k));

//************************ QUESTION 6 *********************

// const N = 5;
// const arr = [0, 2, 1, 2, 0];

// let count1 = 0,
//   count2 = 0,
//   count3 = 0;

// for (let i = 0; i < N; i++) {
//   if (arr[i] === 0) {
//     count1++;
//   }

//   if (arr[i] === 1) {
//     count2++;
//   }

//   if (arr[i] === 2) {
//     count3++;
//   }
// }

// for (let i = 0; i < N; i++) {
//   if (count1 > 0) {
//     arr[i] = 0;
//     count1--;
//   } else if (count2 > 0) {
//     arr[i] = 1;
//     count2--;
//   } else if (count3 > 0) {
//     arr[i] = 2;
//     count3--;
//   }
// }

// console.log(arr);

//**************************QUESTION 7*************

// sort012(arr, N)
//     {
//         //your code here

//         let count1=0,count2=0,count3=0;

//         for(let i=0;i<N;i++)
//         {
//             if(arr[i]===0)
//             {
//                 count1++;
//             }
//             if(arr[i]===1)
//             {
//                 count2++;
//             }
//             if(arr[i]===2)
//             {
//                 count3++;
//             }
//         }

//         for(let i=0;i<N;i++)
//         {
//             if(count1>0)
//             {
//                 arr[i]=0;
//                 count1--;
//             }
//             else if(count2>0)
//             {
//                 arr[i]=1;
//                 count2--;
//             }
//             else if(count3>0)
//             {
//                 arr[i]=2;
//                 count3--;
//             }

//         }
//         return arr;
//     }

//**************** QUESTION 9*************

// const arr = [1, -1, 3, 2, -7, -5, 11, 6];
// const n = arr.length;

// let j = 0;

// for (let i = 0; i < n; i++) {
//   if (arr[i] >= 0) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
// }

// console.log(arr);

//***************QUESTION 10 *****************

// doUnion(a, n, b, m){
//     // code here

//     const UnionOfArrays= new Set();

//     for(let i=0;i<n;i++)
//     {
//         UnionOfArrays.add(a[i]);
//     }
//     for(let i=0;i<m;i++)
//     {
//         UnionOfArrays.add(b[i]);
//     }

//     return UnionOfArrays.size;
// }

// const subArray = (arr, n, s) => {
//   for (let i = 0; i < n; i++) {
//     let newSum = arr[i];

//     if (newSum == s) {
//       console.log(`The sum ${newSum} found at index ${i}`);
//       return;
//     } else {
//       for (let j = i + 1; j < n; j++) {
//         newSum += arr[j];

//         if (newSum == s) {
//           console.log(`Subarray with sum ${s} found from index ${i} to ${j}`);
//           return;
//         }
//       }
//     }
//   }
//   console.log(`No Subarray sum found`);
//   return;
// };

// const subArray = (arr, n, s) => {
//   let left = 0,
//     right = 0,
//     newSum = 0;

//   while (right < n) {
//     newSum += arr[right];

//     while (newSum > s) {
//       newSum -= arr[left];
//       left++;
//     }

//     if (newSum === s) {
//       console.log(
//         `Subarray with sum ${s} found from index ${left} to ${right}`
//       );
//       return;
//     }
//     right++;
//   }
//   console.log(`No Subarray was found`);
// };

// let n = 5;
// const arr = [1, 2, 3, 7, 5];
// let sum = 12;

// console.log(subArray(arr, n, sum));

// let n = 5;
// const arr = [1, 2, 3, 4, 5];

// if (n <= 1) {
//   console.log(arr);
// }

// const temp = arr[n - 1];

// for (let i = n - 2; i >= 0; i--) {
//   arr[i + 1] = arr[i];
// }

// arr[0] = temp;

// console.log(arr);

// let n = 5;
// const arr = [1, 2, 3, 4, 5];

// let i = 0;
// let j = n - 1;

// while (i != j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
// }

// console.log(arr);

// let n = 10;
// const arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];
// let totalSum = (n * (n + 1)) / 2;

// for (let i = 0; i < n; i++) {
//   totalSum = totalSum - arr[i];
// }

// console.log(`Missing number is ${totalSum}`);

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 3];
// const n = arr.length;
// let fre = {};

// for (let i = 0; i < n; i++) {
//   fre[arr[i]]++;
// }

// console.log(fre);

// const str = "madan";
// const n = str.length;
// let count = 0;

// for (let i = 0; i < n / 2; i++) {
//   if (str[i] === str[n - 1 - i]) {
//     count = 1;
//   } else {
//     break;
//   }
// }

// if (count) {
//   console.log(`The string ${str} is Palindrome `);
// } else {
//   console.log(`The string ${str} is not a palindrome`);
// }

//**************PRACTISE******************

// function fizzBuzz(num) {
//   if (typeof num !== "number") {
//     return NaN;
//   } else if (num % 3 !== 0 && num % 5 !== 0) {
//     return `This number ${num} is not divisible by 3 or 5`;
//   } else if (num % 3 === 0 && num % 5 === 0) {
//     return `This number ${num} is divisible by both 3 and 5`;
//   } else if (num % 3 === 0) {
//     return `This number ${num} is divisible by 3`;
//   } else if (num % 5 === 0) {
//     return `This number ${num} is divisible by 5`;
//   }
// }

// let number = fizzBuzz();

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) {
//     console.log("Liccense suspended");
//   } else {
//     console.log(`total points ${points}`);
//   }
// }

// checkSpeed(150);

// function stringProperties(movie) {
//   for (let key in movie) {
//     if (typeof movie[key] === "string") console.log(movie[key]);
//   }
// }

// const movie = {
//   title: "a",
//   yearRelaese: 2018,
//   rating: 4.5,
//   director: "b",
// };

// stringProperties(movie);

// function Sum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

//   return sum;
// }

// console.log(Sum(10));

//*******************************************
// const n1 = 6,
//   arr1 = [1, 5, 10, 20, 40, 80];
// const n2 = 5,
//   arr2 = [6, 7, 20, 80, 100];
// const n3 = 8,
//   arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

// const commonEle = [];

// for (let i = 0; i < n1; i++) {
//   let flag = false;
//   for (let j = 0; j < n2; j++) {
//     if (arr1[i] === arr2[j]) {
//       for (let k = 0; k < n3; k++) {
//         if (arr2[j] === arr3[k]) {
//           flag = true;
//           break;
//         }
//       }
//     }
//     if (flag) {
//       commonEle.push(arr1[i]);
//       break;
//     }
//   }
// }

// console.log(commonEle);

//****************************************

//factory function

// function createAddress(street, city, zip) {
//   return {
//     street,
//     city,
//     zip,
//   };
// }
// const Address = createAddress("a", "b", "c");
// console.log(Address);

//Constructor Function

// function CreateAddress(street, city, zip) {
//   (this.street = street), (this.city = city), (this.zip = zip);
// }

// let addresss1 = new CreateAddress("c", "k", "b");
// let addresss2 = new CreateAddress("c", "k", "b");

// //let add3 = addresss1;

// function areEqual(addresss1, addresss2) {
//   return (
//     addresss1.street === addresss2.street &&
//     addresss1.city === addresss2.city &&
//     addresss1.zip === addresss2.zip
//   );
// }

// function areSame(addresss1, addresss2) {
//   return addresss1 === addresss2;
// }

// console.log(areEqual(addresss1, addresss2));
// console.log(areSame(addresss1, addresss2));
//console.log(areSame(addresss1, add3));

// let arr = [1, 2, 3, 4, 3, 5];

// console.log(arr.indexOf(3));
// console.log(arr);

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const course = courses.find(function (course) {
//   return course.name === "a";
// });

// console.log(course);

let arr1 = [{ id: 1 }];
let arr2 = [4, 5, 6];

//let another = arr;

// another = [];

//arr.length = 0;

//while (arr.length > 0) arr.pop();

//arr.splice(0, arr.length);

const concate = arr1.concat(arr2);
arr1[0].id = 10;
console.log(concate);

const slice = concate.slice();

console.log(slice);
