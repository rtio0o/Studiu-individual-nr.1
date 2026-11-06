import {
  addProduct,
  calculateTotal,
  printCart,
  removeProduct,
  updateQuantity,
} from "./cart.js";

let cart = [];

cart = addProduct(cart, { id: 1, name: "Caiet", price: 12.5, quantity: 2 });
cart = addProduct(cart, { id: 2, name: "Pix", price: 5, quantity: 3 });
cart = addProduct(cart, { id: 1, name: "Caiet", price: 12.5, quantity: 1 });

console.log("Coș după adăugarea produselor:");
printCart(cart);

cart = updateQuantity(cart, 2, 5);
console.log("\nCoș după actualizarea cantității de pixuri:");
printCart(cart);

cart = removeProduct(cart, 1);
console.log("\nCoș după eliminarea caietelor:");
printCart(cart);

try {
  cart = removeProduct(cart, 99);
} catch (error) {
  console.log(`\nEroare: ${error.message}`);
}

console.log(`\nTotal final verificat: ${calculateTotal(cart).toFixed(2)} lei`);
