const calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    calcular: function (operacao, a, b) {
        if (this[operacao]) {
            return this[operacao](a, b);
        } else {
            return "Operação Inválida";
        }
    }
};

const operacaoEscolhida = "somar";
const resultado = calculadora.calcular(operacaoEscolhida, 5, 3);
console.log(`Resultado: ${resultado}`);