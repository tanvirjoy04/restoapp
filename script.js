const crossEl = document.getElementById("cross");
const bannerEl = document.getElementById("banner");

crossEl.addEventListener("click", function () {
  // Start the fade out
  bannerEl.classList.add("hidden");

  // Completely remove from layout after the 0.2s transition
  setTimeout(() => {
    bannerEl.style.display = "none";
  }, 200);
});
