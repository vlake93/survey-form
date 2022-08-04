(() => {
  const dataName = document.querySelector("[data-name]");
  const qStr = window.location.search;
  const urlParams = new URLSearchParams(qStr);
  const name = urlParams.get("name");

  dataName.textContent = `Thank you, ${name}!`;
})();

// const nameContEl = document.querySelector(".name-container");
// const emailContEl = document.querySelector(".email-container");
// const numberContEl = document.querySelector(".number-container");
// const dropdownContEl = document.querySelector(".dropdown-container");
// const checkboxContEl = document.querySelector(".checkbox-container");
// const radioContEl = document.querySelector(".radio-container");
// const contBoxEl = document.querySelector(".container-checkbox");
// const textContEl = document.querySelector(".text-checkbox");
// const titleContEl = document.querySelector(".title-holder");

// const nameButton = document.querySelector(".next-name");
// const emailButton = document.querySelector(".next-email");
// const numberButton = document.querySelector(".next-number");
// const dropdownButton = document.querySelector(".next-dropdown");
// const checkboxButton = document.querySelector(".next-checkbox");
// const textButton = document.querySelector(".next-text");
// const radioButton = document.querySelector(".next-radio");
// const titleButton = document.querySelector(".next-title");

// titleButton.addEventListener("click", function () {
//   titleContEl.style.display = "none";
//   nameContEl.style.display = "block";
// });

// nameButton.addEventListener("click", function () {
//   nameContEl.style.display = "none";
//   emailContEl.style.display = "block";
// });

// numberButton.addEventListener("click", function () {
//   numberContEl.style.display = "none";
//   ContEl.style.display = "block";
// });

// nameButton.addEventListener("click", function () {
//   nameContEl.style.display = "none";
//   emailContEl.style.display = "block";
// });
