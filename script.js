const loginBtn = document.querySelector(".login_button");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const closeBtn = document.querySelector(".close");
const userID = document.querySelector(".userID");

const userLogin = document.querySelector(".userLogin");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.add("show");
  content.classList.add("show");
  console.log("Username", userLogin.value);
  userID.textContent = userLogin.value.toUpperCase();
});

closeBtn.addEventListener("click", function () {
  container.classList.remove("show");
  content.classList.remove("show");
});
