console.log(document);

// document
//   .getElementById("cart-btn-steel")
//   .addEventListener("click", function () {
//     alert("stiller hadi clicked");
//   });

function removeSpace(str) {
  return str.replaceAll("", "").toUpperCase();
}

const titles = document.querySelectorAll(".card-title");
console.log(titles);

for (let title of titles) {
  title.innerHTML = `<span class='text-pink-500'>We are PH Student
  <span>`;
}
