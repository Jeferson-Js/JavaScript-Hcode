const personagem = document.getElementById("obj");
let dx = 0;
let dy = 0;

document.addEventListener("keydown", mover);

function mover(event) {
  let teclado = event.keyCode;
  if (teclado == 37) {
    dx -= 10;
    personagem.style.left = dx + "px";
  } else if (teclado == 39) {
    dx += 10;
    personagem.style.left = dx + "px";
  } else if (teclado == 38) {
    dy -= 10;
    personagem.style.top = dy + "px";
  } else if (teclado == 40) {
    dy += 10;
    personagem.style.top = dy + "px";
  }
}
