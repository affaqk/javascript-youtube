// let student = {
//     name : "affaq",
//     age : 25,
//     university : "Comsats",
//     hobbies : ["Horse riding", "golf", "cricket"],
//     class : {
//         semester : 6,
//         id : 1054
//     },
//     sayHello : function(){
//         console.log("Hello Good morning" + this.name)
//     }
// }

// console.log(student.name, student.age)
// console.log(student.hobbies[1])
// console.log(student.class.semester)
// student.sayHello()

// diff btw normal function and arrow function

// for in
// for(let i in student){
//     console.log(i, student[i])
// }

// const students = [
//     {
//         name : "Affaq",
//         age : 25,
//         university : "comsats"
//     },
//     {
//         name : "Shehram",
//         age : 24,
//         university : "fast"
//     },
//     {
//         name : "furqan",
//         age : 23,
//         university : "nust"
//     }
// ];

// students.map((student)=>{
//     console.log(student.name, student.age, student.university)
// })

// let newStudents = students.filter((student) => {
//     return student.age >= 24
// })

// console.log(newStudents);


const products = [
    {
        name : "T shirt",
        price : 1200,
        color : "red"
    },
    {
        name : "polo shirt",
        price : 800,
        color : "black"
    },
    {
        name : "Dress Shirt",
        price : 650,
        color : "white"
    },
    {
        name : "T shirt",
        price : 900,
        color : "blue"
    },
]

let newProducts = products.filter((product)=>{
    return product.price <= 1000 && product.name === "polo shirt"
})

console.log(newProducts);

newProducts.map((product)=>{
    console.log(product.name, product.price, product.color);
})