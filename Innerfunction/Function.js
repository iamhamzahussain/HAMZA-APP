// // vanilla ESS =======> Syntax
// function name() {} // we dont use a function keyword in vanilla function

// // fatarrow  ========> Syntax
// const num1 = () => { // we use function keyword in fatarrow function
//   return 10 + 20;
// };

// //type of function:- parametrised & non parametrised
// function add() { // pure function : it will always give pure value
//   // function declared  // non parametrised
//   return 10 + 20;
// }
// console.log(add());

// function add1(num1, num2) {
// parametrised
//   return num1 + num2;
// }
// console.log(add(10, 20)); // arguments

// function bigerNum(num1, num2) {
//   if (num1 > num2) {
//     console.log("Num1", num1, "is greater");
//   } else {
//     console.log("Num2", num2, "is greater");
//   }
// }
//console.log(bigerNum(30, 5));
// if there is multiple numbers than we can use rest operatot
// // Rest parameter
//  function bigNum(...nums) {
//   return nums.reduce((acc, cur) => (acc > cur ? acc : cur));
// }
// console.log(bigNum(30, 500, 60, 90, 60));

// function smallNum(...nums) {
//   return nums.reduce((acc, cur) => (acc < cur ? acc : cur));
// }
// console.log(smallNum(9, 2, 7, 1));

// find biggest number by using Math.min 
// const smallNums = (...nums) => {
// return nums.reduce((acc, cur) => (acc < cur ? acc : cur));
//return nums.reduce((acc,cur)=>Math.min(acc,cur))
//   for (i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//   }
// };
// smallNums(9, 2, 7);

// forloop =====> Syntax
// in forloop the increement proccesing is done from index 0 to lastnum
// in forloop the ittration is done
//const array=[10,20,30] // if doing a function in array than array.length is compulsory
//for(i=0;i<array.length;i++){
// console.log([i]+5)
// }

// Reverse the Word given sentence
const reversefun = (str1) => {
  return str1.split(" ").reverse().join(""); // split method is use for take string into array , gives a space in " " for reversing the sentence
};
console.log(reversefun("PDAC is in Nanded"));

// const reverseSent = (str1) => {
//   return str1.split("").reverse().join("").split(" ").reverse().join(" "); // when we give a space (" ") in string it shows a words
// };
// console.log(reverseSent("PDAC is in Nanded"));
// CADP =split ("").reverse(),join("")
// Nanded in is PDAC =split (" ").reverse().join(" ")
// CADP si ni dednaN =split ("").reverse().join("").split(" ").reverse().join(" ")


// const bignumber=(num)=>{
//     return num.split("").reduce((acc, cur) => (acc > cur ? acc : cur));
// }
// console.log(bignumber("7756903575"))

// const bignumber=(num)=>{
//     //return num.split(""),0+num // by adding 0+ num gives the given numbers 0 in start 
//     let result=num.split("")
//     result.unshift("0")
//     return result.join("") // join("") join use to make word in sentence 
// }
// console.log(bignumber("775690357"))

// const bignumber=(num)=>{
//     let result=num.split("")
//     return result.reduce((acc,acc)=>Number(acc)+Number(cur))
// }
// console.log(bignumber("775690"))
