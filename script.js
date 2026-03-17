const shareBtn = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");
const shareWrap = document.querySelector(".share-wrap");
const author = document.getElementById("author");
const authorInfo = document.querySelector(".article__info");

// Stop execution if required elements are missing
if (!shareBtn || !shareOptions || !shareWrap || !author || !authorInfo) {
  console.warn("Share component: missing required DOM elements");
} else {
  function updateLayout() {
    const isMobile = window.innerWidth < 768;
    const popupVisible = !shareOptions.classList.contains("hidden");

    if (popupVisible) {
      if (isMobile) {
        author.classList.add("hidden");
        shareWrap.classList.add("share-option-background");
        authorInfo.classList.add("no-padding");
      } else {
        author.classList.remove("hidden");
        shareWrap.classList.remove("share-option-background");
        authorInfo.classList.remove("no-padding");
      }
    } else {
      author.classList.remove("hidden");
      shareWrap.classList.remove("share-option-background");
      authorInfo.classList.remove("no-padding");
    }
  }

  shareBtn.addEventListener("click", function () {
    shareOptions.classList.toggle("hidden");
    updateLayout();
  });

  window.addEventListener("resize", updateLayout);

  updateLayout();
}