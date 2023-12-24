const btnMore = document.querySelectorAll(".more");
const moreWrap = document.querySelectorAll(".moree");
const moreContent = document.querySelectorAll(".seasonContent");
const ssa = document.querySelectorAll(".cc");
let hFull = true;

btnMore.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    hFull = !hFull; // Membalikkan nilai hFull
    const actionText = hFull ? "Show more..." : "Show less...";

    btn.textContent = actionText;
    if (!hFull) {
      moreContent[index].classList.remove("max-h-[27rem]");
      ssa[index].classList.remove("pb-24");
      moreWrap[index].classList.remove("pt-32", "bottom-0");
      moreWrap[index].classList.remove("pb-8");
      moreWrap[index].classList.add("-bottom-12");
      moreWrap[index].classList.add("bg-none");
    } else {
      moreContent[index].classList.add("max-h-[27rem]");
      // ssa[index].classList.add('pb-24');
      moreWrap[index].classList.add("pt-32", "bottom-0");
      moreWrap[index].classList.remove("-bottom-12");
      moreWrap[index].classList.remove("bg-none");
    }
  });
});