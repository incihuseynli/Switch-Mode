const button = document.querySelector("#btn");
const text = document.querySelector(".info-text");

let darkMode = localStorage.getItem("darkMode");

const activateDarkMode = () => {
  button.classList.add("fa-sun");
  button.classList.remove("fa-moon");
  document.body.className = "dark";
  localStorage.setItem("darkMode", "activated");
  text.innerHTML = "Page is currently in dark mode";
};
const deactivateDarkMode = () => {
  button.classList.add("fa-moon");
  button.classList.remove("fa-sun");
  document.body.className = "light";
  localStorage.setItem("darkMode", "deactivate");
  text.innerHTML = "Page is currently in light mode";
};

if (darkMode === "activated") {
  activateDarkMode();
}

button.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "deactivate") {
    activateDarkMode();
  } else {
    deactivateDarkMode();
  }
});
