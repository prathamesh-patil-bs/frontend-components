let count = 0;

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const steps = document.querySelectorAll(".step");

prevBtn.addEventListener("click", (e) => {
  const progressContainer = document.querySelector(".progress-container");

  progressContainer.style.setProperty("--line-1-zIndex", "10");
  progressContainer.style.setProperty("--line-2-zIndex", "1");

  if (count === 1) {
    progressContainer.style.setProperty("--progress-width", "0%");
    prevBtn.setAttribute("disabled", true);
    steps[count].classList.remove("active");
    count = 0;
  } else if (count === 2) {
    progressContainer.style.setProperty("--progress-width", "33%");
    prevBtn.removeAttribute("disabled");
    steps[count].classList.remove("active");
    count = 1;
  } else if (count === 3) {
    progressContainer.style.setProperty("--progress-width", "66%");
    nextBtn.removeAttribute("disabled");
    steps[count].classList.remove("active");
    count -= 1;
  }
});

nextBtn.addEventListener("click", (e) => {
  const progressContainer = document.querySelector(".progress-container");

  progressContainer.style.setProperty("--line-1-zIndex", "1");
  progressContainer.style.setProperty("--line-2-zIndex", "2");
  
  if (count === 0) {
    progressContainer.style.setProperty("--progress-width", "33%");
    prevBtn.removeAttribute("disabled");
    count += 1;
    steps[count].classList.add("active");
  } else if (count === 1) {

    progressContainer.style.setProperty("--progress-width", "66%");
    count += 1;
    steps[count].classList.add("active");
  } else if (count === 2) {
    progressContainer.style.setProperty("--progress-width", "100%");
    nextBtn.setAttribute("disabled", true);
    count += 1;
    steps[count].classList.add("active");
  }
});
