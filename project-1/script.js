const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");

let currentActive = 1;

buttonNext.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //1)current active önce circle sınıfının lenght'ine bakacak ve eğer küçükse;
  //2)sonra current active circle lenght sayısına eşit/aynı olana kadar devam edecek/ilerleyecek.
  update();
});

buttonPrev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  //console.log(((actives.lenght - 1) / (circle.lenght - 1)) * 100 + "%");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    buttonPrev.disabled = true;
  } else if (currentActive === circles.length) {
    buttonNext = true;
  } else {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}
