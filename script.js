const crossEl = document.getElementById("cross");
const bannerEl = document.getElementById("banner");

crossEl.addEventListener("click", function () {
  bannerEl.classList.add("hidden");

  setTimeout(() => {
    bannerEl.style.display = "none";
  }, 200);
});
