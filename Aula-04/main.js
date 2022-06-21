/*let celular = function () {
  this.modelo = "Motorola";
  this.cor = "prata";
};

let objeto = new celular();

console.log(objeto.modelo, objeto.cor);*/

class celular {
  constructor(cor, modelo) {
    this.cor = cor;
    this.modelo = modelo;
  }
}

let objeto = new celular("Motorola", "Preto");

console.log(objeto);
