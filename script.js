const crossEl = document.getElementById("cross");
const bannerEl = document.getElementById("body-div-banner");

crossEl.addEventListener("click", function () {
  bannerEl.classList.add("hidden");

  setTimeout(() => {
    bannerEl.style.display = "none";
  }, 200);
});
