// const array1=[10,20,30]

// const result=array1.map((item)=>item+5)
// console.log(result)
// const filtered=array1.filter((item)=>item>=20)       //
// console.log(filtered)

// const sorted=array1.sort()
// const sorted=array1.sort((acc,cur)=>acc<cur?1:-1)  // ((acc,cur)) is used in reduce & sort method
// console.log(sorted)

// const data = [
//   { name: "Sam",
//    age: 20,
//    city: "Nanded",
//     married: "yes" },

//   { name: "Jhon",
//   age: 18,
//   city: "Banglore",
//   married: "yes" },

//   { name: "Obaid",
//   age: 22,
//   city: "Pune",
//    married: "No" },

//   {
//     name: "Hasan",
//     age: 28,
//     city: "Hingoli",
//     married: "No",
//   },

//   {
//     name: "Waqas",
//     age: 25,
//     city: "Aurangabad",
//     married: "No",
//   },

//   {
//     name: "Nadim",
//     age: 25,
//     city: "Narsi Hingoli",
//     married: "No",
//   },
//   {
//     name: "Faisal",
//     age: 27,
//     city: "Bidar",
//     married: "No",
//   },

//   {
//     name: "Sheroz",
//     age: 29,
//     city: "Nanded",
//     married: "No",
//   },

// ];
// const result = data.filter((item) =>item.married.includes("No") && item.age>25)
// console.log(result);
// const result=data.map((item)=>item.name.toUpperCase())                          ====> toUpperCase for Alphabet first letter capital
// console.log(result)

// const data =
// [
//   {
//     Name: "AB Devillers",
//     Age: "38",
//     Proffesion: "Cricketer",
//     Place: "South Africa",
//     Retired: "True",
//   },
//   {
//     Name: "Virat",
//     Age: "34",
//     Proffesion: "Cricketer",
//     Place: "India",
//     Retired: "False",
//   },
//   {
//     Name: "Babar Azam",
//     Age: "33",
//     Proffesion: "Cricketer",
//     Place: "Pakistan",
//     Retired: "False",
//   },
//   {
//     Name: "Andreww Russel",
//     Age: "35",
//     Proffesion: "Cricketer",
//     Place: "West Indies",
//     Retired: "False",
//   },
//   {
//     Name: "Kane Williamson",
//     Age: "32",
//     Proffesion: "Cricketer",
//     Place: "New Zealand",
//     Retired: "False",
//   },
// ];
// const result=data.filter((item)=>item.Retired.includes("True"))
// console.log(result);
// const result=data.map((item)=>item.Name.toLowerCase())
// console.log(result)

// data.forEach((item)=> item.Age>34?
// item.Retired=true:
// item.Retired=false
// )
// console.log(data)

// for(i=0;i<data.length;i++){  //
//     data[i].Place.replace("")?
//     data[i].Retired=true:
//     data[i].Retired=false
// }
// console.log(data)

// data.forEach((item) =>
//   item.Place == "West Indies" ? // to change the place/city/country/etc
//   (item.Place = "India") :
//   ""
// );
// console.log(data);

// "I AM FROM MAHARASHTRA " find the lengthy word from sentence

// const bigerWord = (strng1) => {
//   const result = strng1.split(" ")
//   return result.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
  
// };
// console.log(bigerWord("I AM FROM MAHARASHTRA"));
//#####################

// Removing Duplicates number from an array

// const array3=[2,5,2,6,2,4,5,4]
// const result=[...new Set(array3)]
// console.log(result)
//#
// const array3=[2,5,2,6,2,4,5,4]
// const result=array3.filter((item,index)=>array3.indexOf(item)===index)
// console.log(result);

// Map((item))            output => []
// filter((item))         output => []
// foreach((item))        output => []
// sort((acc,cur))        output iterable/outside []
// reduce((acc,cur))      output single value

// const names=["Pune", "Goa","Bombay","Hyderabad","Banglore","Bidar","Nanded"]
// const result=names.filter((item)=> item.startsWith("B"))
// let all=result.map((item)=> item.toUpperCase())

// console.log(all)

//#############
// Merge method
// const names=["raj","Sam","Meena"]
// const cities=["Mumbai","Nanded","Hyderabad"]
// const result=[...cities,...names]
// console.log(result)
// concat method
// const names=["raj","Sam","Meena"]
// const cities=["Mumbai","Nanded","Hyderabad"]
// const result=[...cities,...names]
// const result=cities.concat(names)
// console.log(result)

//###########
// it will print after given time it will gives output once
// setTimeout(()=>{ // Timeout print once
//   clearInterval(mytimer)
//     console.log("hello")
// },5000)

// // it will keep on printing output for given time till we clear interval 

//   const mytimer=setInterval(()=>{ // Timer print consistently as given
//     console.log("hi")
//   },1000)

//##############
// for loop + Timeout => VAR & LET support
// VAR i=0 => 10 10 10 10times output / Global Scope
// LET i=0 => 0 1 2 3 4 5 6 7 8 till 9 output / Block Scope
// for ( let i=0;i<10;i++){ 
//   setTimeout(()=>{      
//     console.log(i)
//   },1000)
// }

//###############
// for ( let i=0;i<5;i++){ 
//   setTimeout(()=>{      
//     console.log(i) // bcz of Settimer it takes atleast 1sec to print 
//   },0) // Question will be : which console will execute first ?
//   console.log(1*2) // it will execute first 
// }

//###########
// Addition of Numbers
// const nums=[2,4,5,7,8,10,2]
// let sum = 0;
// for(i=0;i<nums.length;i++){
//   sum=sum+nums[i] // sum is define as 0 , nums[i] is define as [2,4,5,7,8,10,2]
// }
// console.log(sum)

//############
//find Vowels from given string
// let str="something"
// let result=str.match(/[aeiou]/gi)
// console.log(result)

//#########
// // How Hoisting supports in this kind of situation
// function sayHi(){
//   var name ="Ayush"
//   let age =20
//   console.log(name); // if we define it upward after function than the output shows undefined
//   console.log(age);
// }
// sayHi()

// let number =0
// console.log (number++) //=>0 post increement first excute & after increement
// console.log(++number) //=> 2 pre increement  first increement & after execute
// console.log(number)  //=>2

//############

// // Table Function
// const TableFunction=(num)=>{
//     for(let i=1;i<=10;i++){
//         console.log(i * num);
//     }
// };
// TableFunction(9);
// const fun=(num)=>{
//     if(num%3==0 && num%5===0){
//     console.log("this bizz and fizz")
//     }
//     else if(num%3==0){
//     console.log("this bizz")
//     }
//     else if(num%5===0){
//     console.log("this is fizz")
//     }
//     else{
//         console.log("this not fizz and fizz")
//     }
    
//     }
//     fun(17)

//Second highest number
// const arr=[1,2,34,5]
// arr.sort(function(a,b){
// return b-a;
// })
// console.log(arr[1])