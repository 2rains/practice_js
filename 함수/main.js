// const min = (array) => {
//   var result = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (result > array[i]) result = array[i]; // 초기값보다 비교해서 작으면 result에 넣음
//     // console.log(result); // 잘 들어가는 지 확인
//   }
//   return result;
// };
// const input = [10, 7, 20, 5, 3, 9, -4, 2, -70];
// console.log(min(input));

// const min = (...items) => {
//   console.log(items);
// };
// console.log(min(10, 7, 20, 5, 3, 9, -4, 2, -70));

// console.log("메롱", "배고파", "밥", "뀨");

console.log();
const myPrint = (...data) => {
  console.log(data.join(","));
};
myPrint("배", "고프고", " 머리 아파", " 힝");

const strInput = "머리,아팡,힝구,졸려";
console.log(strInput.split(","));

// const max = (array) => {
//   var result = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (result < array[i]) {
//       result = array[i]; // 초기값보다 비교해서 작으면 result에 넣음
//     }
//     //console.log(result); // 잘 들어가는 지 확인
//   }
//   return result;
// };
// const input2 = [10, 7, 20, 16, 3, 32, -4, 100];
// console.log(max(input2));

// const main = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// console.log(main(1999));

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 2));

// const sum2 = function (a, b) {
//   return a + b;
// };
// console.log(sum2(8, 5));

// const sum3 = (a, b) => a + b;
// console.log(sum(2, 6));

// //prompt("입력하세요");
// let result = prompt("이슬비가 내리는 오늘은", "겁나 습함");
// console.log(result);

// const bb = confirm("졸려?");
// console.log(bb);

// function main(a, b, c) {
//   console.log(`a값은 ${a}`);
//   console.log(`b값은 ${b}`);
//   console.log(`c값은 ${c}`);
//   console.log("");
// }
// main(10, 20, 30);

// const main2 = function (a, b, c) {
//   console.log(`두 번째 함수 ${a},${b},${c}`);
// };
// main2(15, 25, 35);

// const main3 = (a, b, c) => {
//   console.log(`세 번째 함수 ${a},${b},${c}`);
// };

// main();
// main();

// console.log(typeof main);
// console.log(typeof 1234);
// console.log(typeof "123");
// console.log(typeof [1, 2, 3, 4]);

// const obj = { a: 1, b: 2, c: 30 };
// console.log(typeof obj);
// console.log(main);
// console.log(console.log);
