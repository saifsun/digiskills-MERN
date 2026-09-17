// const first = ["Ali", "Babar", "Rehan"]; //array
// const second = ["Ahmad"]; //array
// const students = [...first, ...second];  //merge first and second arrays
// console.log(students);  

const user = {name: "Ali", city: "Peshawar"};
const updates = {city: "Islamabad", age: 20};
const userInfo = {...user, ...updates};  //merging and updating objects
console.log(userInfo);