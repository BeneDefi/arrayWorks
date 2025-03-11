// 1. Create an array of objects (e.g., students with their names and scores):

// Use .filter() to find students who scored above 50.
// Use .map() to extract just the names of students who passed.

let students = [
    {
        name: "James",
        Score: 50,
        gender: "male"
    },
    {
        name: "Grace",
        Score: 60,
        gender: "female"
    },
    {
        name: "Lisa",
        Score: 48,
        gender: "female"
    },
    {
        name: "Sam",
        Score: 78,
        gender: "male"
    },
    {
        name: "Godwin",
        Score: 48,
        gender: "male"
    }
]
let studentScore = students.filter(student => student.Score > 49)
// console.log(studentScore)

let studentName = students.map(student => student.name);
// console.log(studentName)


//2. Create a nested array of objects (e.g., products with categories):

// Flatten the nested array and extract only product names using .flatMap().

let products = [
    {veichle: "car", name:"Mercedes", model: "GLE"},
    {veichle: "car", name:"Range Rover", model: "Velar"},
    {veichle: "car", name:"Rolls Royce", model: "Phantom"}
]

let flatten = products.flatMap((product) => (product.name));
// console.log(flatten);

// Simulate a shopping cart:

// Add items to a cart array, calculate the total price using .reduce(), and sort the cart by price.

let cart = [
    {itemName: "ToothBrush", price: 200},
    {itemName: "Toothpaste", price: 2000},
    {itemName: "Hair Cream", price: 8000},
]

function addToCart(){
    let addItems = cart.push(console.log({itemName: "Body Cream", price: 5000},))
    console.log(addItems)
}


function total(){
    let totalPrice = cart.map(price => price.price);
    let setPrice = 0;
    let total = totalPrice.reduce((a, b) => (a + b + setPrice));
    console.log(total)
}

function viewCart(){
    let viewItems = cart.map(item => item);
    console.log(viewItems)
    total()
}
addToCart()
viewCart()
