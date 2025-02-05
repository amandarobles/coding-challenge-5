// task 1: Customer Profile

//Declaring object customers with properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

//Logging properties
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// task 2: Order Details

//Declaring object order with properies
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function(){
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
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
let discountedPrices = prices.map(price => price * 0.9);

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
console.log(`Total Revenue:$${totalRevenue}`);

// task 7: Customer Search

//Declaring an array
let customers = ["Alice", "Bob", "Charlie", "David"];

//Locating the customer
let foundCustomer = customers.find(customers => customers === "Charlie");

//Logging the result
console.log(`Found Customer: ${foundCustomer}`);

// task 8: Tax Calculation

//Writing a function and returning calculated tax
function calculateTax(amount, taxRate){
    return amount * taxRate;
}
//Logging
console.log(`Tax on $200 at 10%:$${calculateTax(200, 0.1)}`);

// task 9: Discount Application

//Declaring function expression/Returning discounted price
const applyDiscount = function(price, discount){
    return price - (price * discount / 100);
};
//Logging discounted price
console.log(`Discounted Price:$${applyDiscount(100, 15)}`);

// task 10: Loyalty Points)

//Writing an arrow function/Return 1 point per $10
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);

//Logging result
console.log(`Points Earned: ${calculatePoints(250)}`);