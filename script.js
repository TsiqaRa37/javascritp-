// let number = 0;
// for(let i = 10; i <= 97; i++){
//   if(i % 2 !== 0){
//     number++;
//   }
// }
// console.log(number); // 44

// const p =3.14;
// console.log(Math.PI);


//  #1
// let number1 = prompt("შეიყვანეთ პირველი რიცხვი:");
// let number2 = prompt("შეიყვანეთ მეორე რიცხვი:");

// if (number1 > number2) {
// console.log(number1 + " არის მაქსიმალური");
// } else if (number2 > number1) {
// console.log(number2 + " არის მაქსიმალური");
// } else {
// console.log("რიცხვები ტოლია");
// }

//  #2
// let firstNum = prompt("შეიყვანეთ პირველი რიცხვი:");
// let secondNum = prompt("შეიყვანეთ მეორე რიცხვი:");
// let thirdNum = prompt("შეიყვანეთ მესამე რიცხვი:");

// if (firstNum > secondNum && firstNum > thirdNum) {
//   console.log(`${firstNum} მეტია ${secondNum}-ზე და ${thirdNum}-ზე`);
// } else {
//   console.log("პირველი რიცხვი არ არის მოთავსებული მეორესადამდე");
// }

//  #3 
// let year = prompt("შეიყვანეთ წელი: ");
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("ნაკიანია");
// } else {
//   console.log("არ არის ნაკიანი");
// }

//  #4 

// let number = prompt("შეიყვანეთ რიცხვი 1-100-ის ჩათვლით");
// if (number % 3 === 0) {
//   console.log("სამის ჯერადი");
// } else if (number % 5 === 0) {
//   console.log("ხუთის ჯერადი");
// } else if (number % 3 === 0 && number % 5 === 0) {
//   console.log("იყოფა სამზეც და 5 ზეც");
// }