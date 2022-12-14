const precoEtiqueta = 100;
const formaDePagamento = 4;

// if (formaDePagamento === 1) {
//   console.log(precoEtiqueta - (precoEtiqueta * 0.1));
// } else if (formaDePagamento === 2) {
//   console.log(precoEtiqueta - (precoEtiqueta * 0.15));
// } else if (formaDePagamento === 3) {
//   console.log(precoEtiqueta);
// } else {
//   console.log(precoEtiqueta + (precoEtiqueta * 0.1));
// }

//transformando em função

function aplicarDesconto(desconto, valor) {
  return valor - (valor * (desconto/ 100));
}

function aplicarJuros(juros, valor) {
  return valor + (valor * (juros / 100));
}

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(10, precoEtiqueta));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(15, precoEtiqueta));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(aplicarJuros(10, precoEtiqueta));
}