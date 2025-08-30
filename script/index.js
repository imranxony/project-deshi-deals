console.log(document);

// document
//   .getElementById("cart-btn-steel")
//   .addEventListener("click", function () {
//     alert("stiller hadi clicked");
//   });

function removeSpace(str) {
  return str.replaceAll("", "").toUpperCase();
}

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//traverse technique
const cartbtns = document.getElementsByClassName("cart-btn");
console.log(cartbtns);
for (let cartButton of cartbtns) {
  cartButton.addEventListener("click", function () {
    const productImg =
      cartButton.parentNode.parentNode.children[0].children[0].src;

    const productTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;

    // console.log(productTitle);
    const productPrice =
      cartButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;
    console.log(productPrice);
  });
}

//traditional way
// document.getElementById("cart-btn-1").addEventListener("click", function () {
//   const title = getElement("card-title-1").innerText;
//   const price = getElement("card-price-1").innerText;
//   console.log(title, price);
//   //total price k dhorbo
//   const totalPrice = getElement("total-price").innerText;

//   // calculate
//   let currentTotal = Number(price) + Number(totalPrice);

//   // Price Update korbo
//   getElement("total-price").innerText = currentTotal.toFixed(2);

//   //Card-container k dhoro.
//   const cartContainer = getElement("cart-container");

//   // ekta div banao
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//    <div class=" bg-gray-200 rounded-xl flex justify-between p-4">
//                     <img src="./assets/kitchen-1.png" class="w-10" alt="">
//                     <div class="">
//                       <h2 class="font-bold">${title}</h2>
//                       <h2 class="font-bold">${price} TK</h2>
//                     </div>
//                   </div>
//   `;

//   //card-container e add korte hoeb
//   cartContainer.append(newCart);
// });

const titles = document.querySelectorAll(".card-title");
console.log(titles);

for (let title of titles) {
  title.innerHTML = `<span class='text-pink-500'>We are PH Student
  <span>`;
  // title.classList.add("hidden");
  // title.classList.remove("card-title");
}
