function somar(numero1, numero2) {
    const soma = numero1 + numero2
    return "A soma de " + numero1 + " com " + numero2 + " é: " + soma
}

function multiplicar(numero1, numero2){
    const multiplicacao = numero1*numero2
    return "A multiplicação de " + numero1 + " com " + numero2 + " é: " + multiplicacao
}

function dividir(numero1, numero2){
    const divisao = numero1/numero2
    return "A divisão de " + numero1 + " com " + numero2 + " é: " + divisao
}

function subtrair(numero1, numero2){
    const subtracao = numero1 - numero2
    return "A diferença de " + numero1 + " com " + numero2 + " é: " + subtracao
}

const resultadoSoma = somar(2,4)
const resultadoMultiplicacao = multiplicar(2,3)
const resultadoDivisao = dividir(23,4)
const resultadoSubtracao= subtrair(7,4)

console.log(resultadoSoma)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)
console.log(resultadoSubtracao)