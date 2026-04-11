// console.log("loops");
// console.log("sorry")
// console.log("sorry")
// console.log("sorry")
// console.log("sorry")

// for, while, do while

// for(let i = 1; i <= 4; i++){
//     console.log(i)
// }

// console.log("end");


// i = 1 ( first step )
// 1 <= 10 ( true ) // 2 <= 10 ( true ) 3 <= 10  ( true) 4 <= 4 ( true ) 5
// 1 // 2 // 3 // 4 

// let i = 1;

// while( i <= 4){
//     console.log(i);
//     i++
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i == 5);


// for(let i = 1; i <= 4; i--){
//     console.log(i)
// }

// true ( 1 )
// 1 => 0 ( true )


// 1, 0, -1, -2 . . . . 

// for( let i = 0; i <= 20; i++){
//     console.log(i);
//     if( i === 8){
//         break
//     }
// }

// for( let i = 1; i<=20; i++){
//     if( i === 8){
//         continue
//     }

//     console.log(i)
// }


// 20 // even numbers
// for( let i = 1; i <= 20; i++){
//     if(i %2 === 1){
//         console.log(i);
//     }
// }

// 7 X 1 = 7
// 7 X 2 = 14

// let table = 9;
// for(let i = 1; i <= 20; i++){
//     // console.log(table * i)
//     // console.log(table + " X " + i + " = " + table * i);
//     console.log(`${table} X ${i} = ${table*i}`)

// }

// sum of first n integers

let sum = 0;


// 1+2+3+4+5 . . . + 10
for(let i = 1; i <= 10000; i++){
    sum += i
}
// 1 => 3 => 
console.log(sum)
