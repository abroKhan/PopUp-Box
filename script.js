const openBtn = document.getElementById("open_modal");
const closeBtn = document.getElementById("close_modal");
const popUp = document.getElementById("overlay");

openBtn.addEventListener("click", function () {
  popUp.style.display = "block";
  //   document.getElementById("overlay").style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popUp.style.display = "none";
});
