let bar = document.querySelector(".bar");
let nav = document.querySelector(".links");
bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});
/*******************************************/
/**************** Sprodcuts ****************/
/*******************************************/

let MainImg = document.getElementById("MainImg");
let smalling = document.getElementsByClassName("small-img");
smalling[0].onclick = function () {
  MainImg.src = smalling[0].src;
};
smalling[1].onclick = function () {
  MainImg.src = smalling[1].src;
};
smalling[2].onclick = function () {
  MainImg.src = smalling[2].src;
};
smalling[3].onclick = function () {
  MainImg.src = smalling[3].src;
};

/*******************************************/
/**************** Sprodcuts ****************/
/*******************************************/
