let products = [];
let idProductCounter = 0;

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const productNameInput = document.getElementById("product-name").value;
  const priceInput = document.getElementById("price").value;
  const imageInput = document.getElementById("image").value;
  const createProductBtn = document.getElementById("create-product-btn");
  

  const detailProduct = {
    id: idProductCounter++,
    productName: productNameInput,
    price: priceInput,
    image: imageInput,
  };

  products.push(detailProduct);
  displayProductDashboard(detailProduct);
  document.getElementById("form").reset();
});

function displayProductDashboard(load) {
  const displayProduct = document.getElementById("displayProduct");
  const productDashboard = document.createElement("div");
  productDashboard.className = "bg-slate-200 flex";
  productDashboard.innerHTML = `
        <label>
        <input type="checkbox" onclick="updateCart()" class="add-item items-center justify-items-center" id="checkbox" ="${load.id}">
        </label>
        <img src="${load.image}" class="w=1/3 h-40">
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">${load.productName}</p>
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">$${load.price}</p>
        `;

  // productDashboard
  //   .addEventListener("click", () => addToCart(load.id, true));
  // productDashboard
  //   .querySelector(".add-multiple")
  //   .addEventListener("click", () => addToCart(load.id, true));

  // productNameInput.appendChild(productDashboard);

  displayProduct.appendChild(productDashboard);
}

const addToCartBtn = document.getElementById("add-to-cart");
const checkBox = document.getElementById("checkbox");
addToCartBtn.addEventListener("click",updateCart);
checkBox.addEventListener("click",updateCart);

function updateCart(load){
  const cart = document.getElementById("cart");
  const productCart = document.createElement("div");
  productCart.className = "bg-slate-200 flex";
  productCart.innerHTML = `
        <img src="${load.image}" class="w=1/3 h-40">
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">${load.productName}</p>
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">$${load.price}</p>
        <button id="remove" class="bg-blue-500>Remove</button>
        `;

  cart.appendChild(productCart);
     
}
// document.getElementById("add-to-cart").addEventListener("submit", function updateCart() {
//     const addToCartBtn = document.getElementById("add-to-cart");
  
//     cart.innerHTML = "";
//     cart.forEach((item) => {
//       const addToCart = document.createElement("div");
//       addToCart.innerHTML = `<img src="${load.image}" class="full">
//         <p class="text-red-700 font-semibold text-2xl text-balance  my-4 p-4">${load.productName}</p>
//         <p class="text-red-700 font-semibold text-2xl text-balance  my-4 p-4">${load.price}</p>
//         `;
//       cart.appendChild(addToCart);
//     });
  
//     const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     cart.innerHTML = `Total: $${total}`;


//   });

// function displayProductCart(updateCart) {
//   const cart = document.getElementById("cart");
//   const productCart = document.createElement("div");
//   productCart.className = "bg-slate-200 flex";
//   productCart.innerHTML = `
//         <img src="${updateCart.image}" class="w=1/3 h-40">
//         <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">${updateCart.productName}</p>
//         <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">$${updateCart.price}</p>
//         `;

//   cart.appendChild(productCart);
// }

//  function to update the cart when new items and quantities are added
// function updateCart() {
//   cart.innerHTML = "";
//   cart.forEach((item) => {
//     const addToCart = document.createElement("div");
//     addToCart.innerHTML = `<img src="${load.image}" class="full">
//       <p class="text-red-700 font-semibold text-2xl text-balance  my-4 p-4">${load.productName}</p>
//       <p class="text-red-700 font-semibold text-2xl text-balance  my-4 p-4">${load.price}</p>
//       `;
//     cart.appendChild(addToCart);
//   });

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   cart.innerHTML = `Total: $${total}`;
// }

// function to add product item to cart
// function addToCart(productId, isMultiple) {
//   const quantityInput = document.getElementById(`qty-${productId}`);
//   const quantity = isMultiple ? parseInt(quantityInput.value) : 1;
//   const product = products.find((p) => p.id === productId);
//   const cart = cart.find((item) => item.id === product.id);
//   if (cartItem) {
//     cartItem.quantity += quantity;
//   } else {
//     cart.push({ ...product, quantity: quantity });
//   }
//   updateCart();
// }

// function to clear cart items
function clearCart() {
  cart.length = 0;
  updateCart();
}

function imgUrl(imageInput) {
  const input = new URL(imageInput);
  return /\.(jpg|jpeg|png)$/.test(input.pathname);
}

// let uploads = [];
// let idCounter = 0;
// let totalLikes = 0;

// document.getElementById("form").addEventListener("submit", function (event) {
// 	event.preventDefault();

// 	const imageURL = document.getElementById("imageURL").value;
// 	const imageCaption = document.getElementById("imageCaption").value;
// 	const errorMessage = document.getElementById("errorMessage");

// 	// validation
// 	if (!isImgUrl(imageURL)) {
// 		errorMessage.textContent = "Please enter a valid image URL.";
// 		return;
// 	}

// 	if (imageCaption.length < 3 || imageCaption > 255) {
// 		errorMessage.textContent =
// 			"Please describe your image (at least 3 characters, and not over 255 characters).";
// 		return;
// 	}

// 	// create new upload object
// 	const newUpload = {
// 		id: idCounter++,
// 		imageURL: imageURL,
// 		caption: imageCaption,
// 		likes: false,
// 	};

// 	uploads.push(newUpload);

// 	displayUpload(newUpload);

// 	errorMessage.textContent = "";

// 	document.getElementById("form").reset();
// });

// document
// 	.querySelector('button[type="reset"]')
// 	.addEventListener("click", function () {
// 		const errorMessage = document.getElementById("errorMessage");
// 		errorMessage.textContent = "";
// 	});

// function displayUpload(upload) {
// 	const displaySection = document.getElementById("displaySection");
// 	const card = document.createElement("div");
// 	card.className = "bg-white p-4 rounded-lg shadow-lg";

// 	card.innerHTML = `
// 		<img src="${upload.imageURL}" alt="${upload.caption}" class="w-full aspect-[4/3] rounded-md mb-4 object-cover">
//     <p class="text-gray-700 font-semibold text-2xl text-balance overflow-hidden my-4 p-4">${upload.caption}</p>
//     <label class="inline-flex items-center mt-2 text-2xl px-4">
//       <input type="checkbox" class="w-8 h-8 text-2xl accent-rose-600" data-id="${upload.id}" onchange="toggleLike(event)">
//       <span class="ml-2 text-gray-700 font-semibold">Love this 😍!</span>
//     </label>
//   `;

// 	displaySection.appendChild(card);
// 	updateLikeCounter();
// }

// function toggleLike(event) {
// 	const checkbox = event.target;
// 	const uploadId = parseInt(checkbox.getAttribute("data-id"));
// 	const upload = uploads.find((upload) => upload.id === uploadId);

// 	if (upload) {
// 		upload.likes = checkbox.checked;
// 		updateLikeCounter();
// 	}
// }

// function updateLikeCounter() {
// 	totalLikes = uploads.filter((upload) => upload.likes).length;
// 	document.getElementById(
// 		"likeCounter"
// 	).textContent = `Total Likes: ${totalLikes}`;
// }

// // Validating image URLs using RegEx
// function isImgUrl(imageURL) {
// 	const input = new URL(imageURL);
// 	return /\.(jpg|jpeg)$/.test(input.pathname);
// }

// / using the DOMContentLoaded event to ensure
// // the script runs after the DOM is fully loaded
// // Web pages that load content dynamically based
// // on user interactions need to ensure that the
// // initial DOM structure is ready before running
// // JavaScript.
// // further reading: https://sentry.io/answers/whats-the-difference-between-the-window-load-event-and-the-document-domcontentloaded-event/

// document.addEventListener("DOMContentLoaded", () => {
//   // products array
//   const products = [
//     { id: 1, name: "Product A", price: 20, image: "./images/product1.svg" },
//     { id: 2, name: "Product B", price: 30, image: "./images/product2.svg" },
//     { id: 3, name: "Product C", price: 40, image: "./images/product3.svg" },
//   ];

//   // create an empty named cart
//   const cart = [];

//   // create an empty array named transactions
//   let transactions = [];

//   // assigning html elements by Id
//   const productsContainer = document.querySelector("#products");
//   const cartItemsEl = document.querySelector("#cart-items");
//   const cartTotalEl = document.querySelector("#cart-total");
//   const clearCartButton = document.querySelector("#clear-cart");
//   const checkoutButton = document.querySelector("#checkout");
//   const transactionsContainer = document.querySelector("#transactions");

//   // Function to create and append div element for each product item added to the DOM
//   // including the product details and buttons with event listeners.
//   // Passing product as the parameter to the addProductToDom function
//   function addProductToDOM(product) {
//     const productDiv = document.createElement("div");
//     // Setting the html elements inside the product div element
//     // Using Tailwind syntax applied to the product container element
//     productDiv.className =
//       "p-4 bg-white rounded shadow-lg flex flex-col items-center justify-center";
//     // HTML elements with Tailwind applied to elements inside the container element
//     // using string literals to code the html elements dynamically, thereby rendering the object's properties including
//     // name, price, and id
//     // lastly we create two buttons; the 'Add 1 to Cart' button and the 'Add Multiple to Cart' button
//     productDiv.innerHTML = `
//               <h3 class="text-lg font-bold mb-2">${product.name}</h3>
//               <p class="mb-2">$${product.price}</p>
//               <img src=${product.image} />
//               <input type="number" value="1" min="1" id="qty-${product.id}" class="mb-2 w-16 text-center border rounded">
//               <div class="flex space-x-2">
//                   <button class="add-single px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 cursor-pointer">Add 1 to Cart</button>
//                   <button class="add-multiple px-4 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 cursor-pointer">Add Multiple to Cart</button>
//               </div>
//           `;
//     // use .querySelector to target the html element with class named .add-single
//     // use .addEventListener to detect a click and trigger the addToCart() function with
//     // the argument product.id passed into; false for add-single quantity and true for add-multiple quantity
// productDiv
//   .querySelector(".add-single")
//   .addEventListener("click", () => addToCart(product.id, false));
// productDiv
//   .querySelector(".add-multiple")
//   .addEventListener("click", () => addToCart(product.id, true));
// //
// productsContainer.appendChild(productDiv);
//   }
//   // function to update the cart when new items and quantities are added
//   function updateCart() {
//     cartItemsEl.innerHTML = "";
//     cart.forEach((item) => {
//       const li = document.createElement("li");
//       li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
//       cartItemsEl.appendChild(li);
//     });
//     const total = cart.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     cartTotalEl.textContent = `Total: $${total}`;
//   }
//   // function to add product item to cart
//   function addToCart(productId, isMultiple) {
//     const quantityInput = document.getElementById(`qty-${productId}`);
//     const quantity = isMultiple ? parseInt(quantityInput.value) : 1;
//     const product = products.find((p) => p.id === productId);
//     const cartItem = cart.find((item) => item.id === product.id);
//     if (cartItem) {
//       cartItem.quantity += quantity;
//     } else {
//       cart.push({ ...product, quantity: quantity });
//     }
//     updateCart();
//   }
//   // function to clear cart items
//   function clearCart() {
//     cart.length = 0;
//     updateCart();
//   }
//   // function to confirm transaction to record
//   function checkout() {
//     const transactionId = Date.now();
//     const date = new Date().toISOString();
//     const orderDetails = cart.map((item) => ({
//       name: item.name,
//       quantity: item.quantity,
//       unitPrice: item.price,
//       totalPrice: item.price * item.quantity,
//     }));
//     const grandTotal = cart.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     const transaction = { transactionId, date, orderDetails, grandTotal };
//     transactions.push(transaction);
//     displayTransaction(transaction);
//     clearCart();
//   }
//   // function to display transaction
//   function displayTransaction(transaction) {
//     const transactionDiv = document.createElement("div");
//     transactionDiv.className = "mb-4 p-2 border border-gray-300 rounded";
//     transactionDiv.innerHTML = `
//               <h4 class="font-bold">Transaction ID: ${
//                 transaction.transactionId
//               }</h4>
//               <p>Date: ${transaction.date}</p>
//               <ul>
//                   ${transaction.orderDetails
//                     .map(
//                       (item) => `
//                       <li>${item.name} - ${item.quantity} x $${item.unitPrice} = $${item.totalPrice}</li>
//                   `
//                     )
//                     .join("")}
//               </ul>
//               <p class="font-bold">Grand Total: $${transaction.grandTotal}</p>
//           `;
//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit Transaction";
//     editButton.className =
//       "px-4 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-700 cursor-pointer";
//     editButton.addEventListener("click", () =>
//       editTransaction(transaction.transactionId)
//     );
//     transactionDiv.appendChild(editButton);
//     transactionsContainer.appendChild(transactionDiv);
//   }
//   // function to edit transaction details
//   function editTransaction(transactionId) {
//     const transaction = transactions.find(
//       (t) => t.transactionId === transactionId
//     );
//     if (!transaction) {
//       alert("Transaction not found.");
//       return;
//     }

//     // Providing a more detailed instruction in the prompt.
//     const promptMessage = `Edit quantities for Transaction ID ${transactionId}. Enter changes in the format: "ProductName, NewQuantity; ProductName, NewQuantity;"\nExample: Product A, 2; Product B, 5;`;
//     const userInput = prompt(
//       promptMessage,
//       transaction.orderDetails
//         .map((item) => `${item.name}, ${item.quantity};`)
//         .join(" ")
//     );

//     if (!userInput) return; // User cancelled the prompt

//     try {
//       const entries = userInput
//         .split(";")
//         .map((e) => e.trim())
//         .filter((e) => e.length > 0);
//       const updatedDetails = entries.map((entry) => {
//         const parts = entry.split(",").map((p) => p.trim());
//         if (parts.length !== 2 || isNaN(parseInt(parts[1]))) {
//           throw new Error("Invalid entry format");
//         }
//         return { name: parts[0], quantity: Math.max(1, parseInt(parts[1])) };
//       });

//       transaction.orderDetails.forEach((item) => {
//         const updatedItem = updatedDetails.find((u) => u.name === item.name);
//         if (updatedItem && updatedItem.quantity >= 0) {
//           item.quantity = updatedItem.quantity; // Update quantity
//         }
//       });
//       // the accumulator or acc holds the accumulated value from previous iterations
//       // the item is the curren item being processed in the array
//       // the anonymous function calculates the total price for the current item then
//       // adds this value ti the acc
//       transaction.grandTotal = transaction.orderDetails.reduce(
//         (acc, item) => acc + item.unitPrice * item.quantity,
//         0
//       );
//       displayTransactions(); // Refresh the display of transactions
//     } catch (error) {
//       alert(
//         `Error: ${error.message}. Please try again with the correct format.`
//       );
//     }
//   }
//   // function to display transactions record or refreshing the display of transactions
//   function displayTransactions() {
//     transactionsContainer.innerHTML = "";
//     transactions.forEach((transaction) => displayTransaction(transaction));
//   }

//   // for every product in the products array add the product to the DOM
//   products.forEach((product) => addProductToDOM(product));

//   // Multiple Event Listeners
//   clearCartButton.addEventListener("click", clearCart);
//   checkoutButton.addEventListener("click", checkout);
// });
