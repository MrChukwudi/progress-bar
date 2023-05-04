let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; //Setting the current active circle to 1 as a reasonable placeholder, since we will comparing the index of the nodelist Circles later.

next.addEventListener("click", () => {
  //Adding event listener to the next button
  currentActive++;

  if (currentActive > circles.length) {
    //Making sure that the arbitrary current active value doesn't increase beyound the scope of our nodelist index
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  //This is the real function that compares the index of our Circles nodelist to the current active value according to click events
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (currentActive === circles.length) {
    // Handles the enabling/disabling of the buttons accordingly
    next.disabled = true;
  } else if (currentActive === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  // Trying to calculate the percentage to increament/decreament the width of the slider bar.
  let actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
