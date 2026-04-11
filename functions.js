// console.log("functions")

// function greeting(name){
//     console.log("Good morning", name)
// }

// greeting("ali")
// greeting("zain")

// arguments
// parameters

// add two numbers

// let num1 = 10;
// let num2 = 20;
// let ans = num1 + num2;
// console.log(ans);


// function addTwoNumbers(a,b){
//     console.log(a+b)
// }


// const addTwoNumbers = (a,b) => {
//     console.log(a+b)
// }

// const addTwoNumbers = () => console.log(a+b)
// addTwoNumbers(5,10)

// addTwoNumbers(8,9)
// addTwoNumbers(19,1)
// addTwoNumbers(3,4)
// addTwoNumbers(5,1)
// addTwoNumbers(10,94)

// const printTable = (num, limit) => {
//     for(let i = 1; i <= limit; i++){
//         console.log(num + " X " + i + " = " + num * i)
//     }
// }

// printTable(10, 10)
// printTable(12, 11)

// 10 X 1 = 10
// 10 X 2 = 20

// const addThreeNumbers = (a,b,c) => {
//     return a + b + c
// }

// const ans = addThreeNumbers(7,8,9)
// console.log(ans);


const addNumbers = (...nums) => {
    let sum = 0;
    for(let num of nums){
        // sum = sum + num
        sum += num
    }
    console.log(sum);
    
}

// [7,8,9]


addNumbers(7,8,9)
addNumbers(5,3)
addNumbers(9,7,3,9,2)