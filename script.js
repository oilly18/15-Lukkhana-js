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
    price: +priceInput,
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
        <input type="checkbox" onChange="updateCart()" class="checkbox add-item items-center justify-items-center" id="${load.id}">
        </label>
        <img src="${load.image}" class="w=1/3 h-40">
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">${load.productName}</p>
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">$${load.price}</p>
        `;

  displayProduct.appendChild(productDashboard);
}

const addToCartBtn = document.getElementById("add-to-cart");
const checkBox = document.querySelectorAll("input[type='checkbox']");

addToCartBtn.addEventListener("click", updateCart);

function updateCart(checksBox) {
  const cart = document.getElementById("cart");
  const productCart = document.createElement("div");
  productCart.className = "bg-slate-200 flex";
  productCart.innerHTML = `
        <img src="${checksBox.image}" class="w=1/3 h-40">
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">${checksBox.productName}</p>
        <p class="text-pink-700 font-semibold text-2xl text-balance  my-4 p-4 flex-col">$${checksBox.price}</p>
        <p></p>
        `;

  cart.appendChild(productCart);
  updateCart(detailProduct);
}

function imgUrl(imageInput) {
  const input = new URL(imageInput);
  return /\.(jpg|jpeg|png|gif)$/.test(input.pathname);
}
