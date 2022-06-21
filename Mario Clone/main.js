let mario = document.getElementById("mario");
let tubo = document.getElementById("tubo");

const jump = () => {
  mario.classList.add("jumping");

  setTimeout(() => {
    mario.classList.remove("jumping");
  }, 500);
};

const loop = setInterval(() => {
  const tuboPosition = tubo.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80) {
    tubo.style.animation = "none";
    tubo.style.left = `${tuboPosition}px`;

    mario.style.animation = "none";
    marioPosition.style.bottom = `${marioPosition}px`;

    mario.src = "marioLoser.png";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
