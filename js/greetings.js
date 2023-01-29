const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutInput = document.querySelector("#logoutBtn");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작을 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutInput.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem("USERNAME_KEY");
  localStorage.removeItem("todos");
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutInput.classList.add(HIDDEN_CLASSNAME);
  location.reload();
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

logoutInput.addEventListener("click", onLogoutSubmit);
