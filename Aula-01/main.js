function somar(x1, x2, operador) {
  return eval(`${x1} ${operador} ${x2}`);
}
let resultad = somar(20, 20, "+");

console.log(resultad);

let soma = (x1, x2, operador) => {
  return eval(`${x1} ${operador} ${x2}`);
};

let resultado = soma(20, 200, "+");

console.log(resultado);

// Using event with the focus.

window.addEventListener("focus", (event) => {
  console.log("Focus");
});

document.addEventListener("click", (event) => {
  console.log("Click");
});
