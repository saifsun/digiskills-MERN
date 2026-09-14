//arrow function
// const greet = (name) => {
//   console.log("Hi", name);
// };
// greet("Saif");

//single parameter
// const square = (n) => {
//   return n*n;
// }
// console.log(square(5));

//two parameters
// const add = (a, b) => {
//   return a*b;
// };
// console.log(add(100, 5));

//simplified arrow functions
// const square = (n) => n*n;
// console.log(square(5));

// const add = (a,b) => a + b;
// console.log(add(100, 500));

// const deliverCharges = (km) => km * 20;
// console.log(deliverCharges(5));

//default parameters
// const greet = (name = "Guest") => {
//   return "Hello " + name;
// };
// console.log(greet());

// function add(a, b = 10){//10 is default //normal function
//   console.log(a + b);
// };
// add(5); // default value will be applied for b so the result will be 15
// add(10,25);

// const add = (a,b=5) => { console.log( a + b)};//arrow function
// add(5);
// add(5,10);

// const order = (item, qty=1) => { console.log(item + " x " + qty)};
// order("burger", ); //default parameter
// order("cake", 5);

//rest parameters

// const showNumber = (...numbers) => { //the three dots will convert it to an array that will pass all numbers
//   console.log("Number " , numbers);
// }
// showNumber(2,3,4,5,6,7);

// function totalMarks(...marks) {
//   let total=0;
//   for(let mark of marks){
//     total += mark;
//   }
//   return total;
// };

// console.log(totalMarks(50, 55, 99));

