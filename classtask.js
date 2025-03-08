let budget = [];


function addBudget(addItems){
    budget.push(addItems)
}

function removeBudget(removeItems){
    let remove = budget.indexOf(removeItems)
    if (remove !== -1){
        budget.splice(remove, 1);
    }
}

function viewBudget(){
    budget.forEach((removeBudget) => console.log(removeBudget));
}

addBudget("Buy tomatoes");
addBudget("Buy rice");
addBudget("Buy beans");
addBudget("Buy gas");
addBudget("Buy Coke");
viewBudget();
removeBudget("Buy Coke")
viewBudget();

// KingSort
let items = [
	{type: "bag", name: "Gucci"},
	{type: "shoe", name: "Nike"},
	{type: "shoe", name: "Nike"},
	{type: "bag", name: "Chanel"},
]

function addItem(item) {
	if(typeof(item) != 'object') {
		console.log("Item must be an object")
	}else if(!Object.hasOwn(item, "type") || !Object.hasOwn(item, "name")) {
		console.log("Item must have a type and name")
	}else{
		items.push(item)
	}
}

function sortItems() {
	return Object.groupBy(items, ({type}) => type)
}

addItem({type: "phone", name: "Samsung"})
console.log(sortItems())

// Budget App
let budgets = []

function addBudget(budget) {
	if(typeof(budget) != 'object') {
		console.log("Budget must be an object")
	}else if(!Object.hasOwn(budget, "title") || !Object.hasOwn(budget, "price")) {
		console.log("Budget must have a title and price")
	}else{
		budgets.push(budget)
	}
}

function budgetTotal() {
	let total = 0
	budgets.forEach((budget) => total += budget.price)
	return total
}

function removeBudget(budgetTitle) {
	budgets = budgets.filter((budget) => budget.title !== budgetTitle)
}

addBudget({title: "Rice", price: 80000})
addBudget({title: "Beans", price: 60000})
addBudget({title: "Fuel", price: 90000})
console.log(budgets, budgetTotal(), removeBudget("Fuel"), budgets, budgetTotal())

// Contact App
let contacts = []

function addContact(contact) {
	if(typeof(contact) != 'object') {
		console.log("Contact must be an object")
	}else if(!Object.hasOwn(contact, "name") || !Object.hasOwn(contact, "number")) {
		console.log("Contact must have a name and number")
	}else{
		contacts.push(contact)
	}
}

function removeContact(value) {
	contacts = contacts.filter((contact) => contact.name !== value)
}

addContact({name: "Charles", number: "08123456789"})
addContact({name: "Racy", number: "08123456781"})
addContact({name: "King", number: "08123456000"})
console.log(contacts)
removeContact("King")
console.log(contacts)

// Cart System
let cart = []

function addToCart(item) {
	if(typeof(item) != 'object') {
		console.log("Item must be an object")
	}else if(!Object.hasOwn(item, "name") || !Object.hasOwn(item, "price")) {
		console.log("Item must have a name and price")
	}else{
		cart.push(item)
	}
}

function removeFromCart(item) {
	cart = cart.filter((cartItem) => cartItem.name !== item)
}

function cartTotal() {
	let total = 0
	cart.forEach((item) => total += item.price)
	return total
}

addToCart({name: "Car", price: 250000})
addToCart({name: "Food", price: 2500})
addToCart({name: "Bread", price: 150000})
console.log(cart)
console.log(cartTotal());
removeFromCart("Car")
console.log(cart)

// Birth Count


// Message App
let users = [
	{
		name: "KC",
		messages: []
	},
	{
		name: "King",
		messages: []
	}
]

function sendMessage(from, to, message) {
	let userIndex = users.findIndex((user) => user.name == to)
	if(userIndex) {
		let newMessage = {
			from,
            message,
            isRead: false
		}

		users[userIndex].messages.unshift(newMessage)
	}
}

sendMessage("KC", "King", "Hello")
// readMessage();
console.log(users[1].messages)
