document.querySelector(".open").addEventListener("click", () => {
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector(".nav_list").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".close").style.display = "none";
  document.querySelector(".open").style.display = "block";
  document.querySelector(".nav_list").style.display = "none";
});
