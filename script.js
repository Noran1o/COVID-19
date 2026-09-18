let darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "light";
  } else {
    darkModeBtn.textContent = "dark";
  }
});