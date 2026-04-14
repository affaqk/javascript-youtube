// let a = 20;
// let name = "ali"

// collection of same datatypes elements
// const students = ["ali", "affaq", "furqan", 7, 99.99, true, {name : "haris"},[65]];
// indexing
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// 0 // 8

// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }



// pop method
// marks.pop();
// marks.push(10)
// marks.unshift(10)
// marks.shift()
//marks.splice(2,0,12,45) // 1) which index, 2) how much elements do you want to del 3) what you have to add
// console.log(marks);

//for of, for in , for each



// for(let mark of marks){
//     console.log(mark + 2);
// }

// for(let i in marks){
//     console.log(i);
// }

// marks.forEach((mark) => {
//     console.log(mark + 2);
// })


// const marks = [7,9,4,5];
// // find square of all elements

// // map

// let newArray = marks.map((mark)=>{
//     return mark ** 2
// })
// console.log(newArray);
// console.log(marks)

// filter

const marks = [88, 89, 45, 67, 23, 90, 11, 10];

// const newArray = marks.filter((mark) =>{
//     return mark > 50
// })

// console.log(newArray);


const total = marks.reduce((acc, val) => {
    return acc + val
},0)

console.log(total);


// acc = 0 => 88 => 177
// val = 88
//  0 + 88 = 88 => acc = 88
// 88 + 89 = 177
// 177 + 45

