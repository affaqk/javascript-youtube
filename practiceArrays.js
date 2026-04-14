// find cube of elements in array
// let marks = [9,6,4,6,9,2,4];
// using map

// let cube = marks.map((mark) => {
//     return mark ** 3
// })

// let cube = marks.map(mark => mark ** 3)

// console.log(cube);


// remove 0 from array
// let marks = [9,0,6,4,0,6,9,2,4];
// let removeZeros = marks.filter((mark) =>{
//     return mark !== 0
// })

// let removeZeros = marks.filter(mark => mark !== 0)
// console.log(removeZeros);

// find largest/lowest in array
// let marks = [88,0,6,89,4,34,6,9,2,99];
// let largest = marks[0];

// marks.map((mark) => {
//     if(mark > largest){
//         largest = mark
//     }
// })

// console.log(largest);

// let lowest = marks[0];
// marks.map((mark) => {
//     if(mark < lowest){
//         lowest = mark
//     }
// })

// console.log(lowest);


// find sum of array
// let marks = [88,0,6,89,4,34,6,9,2,99];

// let sum = marks.reduce((acc, val) => {
//     return acc + val
// },0);

// let sum = marks.reduce((acc, val) => acc + val, 0)

// console.log(sum);

// acc => 0
// val = marks[0] => 0 + 88 => 88

// average of array

// let sum = marks.reduce((acc, val) => acc + val, 0)

// console.log(sum/marks.length);
// find students ( name starts from "a")

// const students = ["affaq", "Ahil", "shehram", "furqan"];
// let newStudents = students.filter((student) => student[0] === "a" || student[0] === "A");
// console.log(newStudents);

// change array to string

// const students = ["affaq", "Ahil", "shehram", "furqan"];
// let newStudents = students.join(",");
// console.log(newStudents);

// copy values of 2 arrays in 3rd array

// let arr1 = [7,5,4,8,7,1,2];
// let arr2 = [87, 56, 32,11,90];
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);


// flat an array ( upto infinity )
// let arr1 = [7,5,4,8,7,1,2, [10,11], [7,3], [[9,9]]];
// let flatArray = arr1.flat(Infinity)
// console.log(flatArray);

// combine map, filter and reduce


const marks = [67, 78, 44, 90, 80, 12, 15, 71, 88, 90];

let newStudents = marks.filter((student) => student > 70).map((std5) => std5+5).reduce((acc, val) => acc + val, 0)


// filter marks > 70 : add 5 in those marks : find out the total of marks
console.log(newStudents);
