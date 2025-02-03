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

// task 4: Price Adjustments

//Declaring an array
let prices = [100, 200, 300];

//Applying a 10% discount
let discountedPrices = prices.map(price => price *0.9);

//Logging the new discounted prices
console.log(`Discounted Prices: ${discountedPrices}`);

// task 5: Product Availability

//Declaring an array with five product quantities
let inventory = [5, 0, 12, 8, 0];

//Remove products with zero stock
let availableProducts = inventory.filter(quantity => quantity > 0);

//Logging filtered array
console.log(`Available Products: ${availableProducts}`);

// task 6: Revenue Calculation

//Declaring an array
let sales = [500, 300, 200, 400];

//Calculating total revenue
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);

//Logging total revenue
console.log(`Total Revenue:$ ${totalRevenue}`);