// task 1: Customer Profile

//Declaring object customers with properties
let customer = {
    name: "John Doe"
    age: 35,
    email: "john.doe@email.com"
};

//Logging properties
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// task 2: Order Details

//Declaring object order with properies
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function(){
        console.log(`Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
    }
};
//Add a method inside object
order.displayOrder();

// task 3: Shopping Cart

//Declaring array with three product names
let cartItems = ["Laptop", "Mouse", "Keyboard"];

//Add a new product to the cart
cartItems.push("Monitor");
//Remove the last item
cartItems.pop();
//Add item at the beginning
cartItems.unshift("Tablet");
//Remove first item
cartItems.shift();

//Logging final array
console.log(`Final Cart Items: ${cartItems}`);