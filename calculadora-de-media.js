const input = require("readline-sync");

console.log('== Vamos calcular a média de notas? ==')

const nota1 = input.question('Informe a primeira nota: ')
const nota2 = input.question('Informe a segunda nota: ')
const nota3 = input.question('Informe a terceira nota: ')
const nota4 = input.question('Informe a quarta nota: ')
const nota5 = input.question('Informe a quinta nota: ')
const nota6 = input.question('Informe a sexta nota: ')

const total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)
const medianota = total / 6

console.log(`===== Sua média foi: ${medianota.toFixed(1)} =====`)

if (medianota >= 7) {
    console.log('APROVADA')
} else if(medianota < 5) {
    console.log('REPROVADA')
} else if(medianota >= 5 && medianota < 7) {
    console.log('RECUPERAÇÃO')
} else {
    console.log('ERRO! REPITA A OPERAÇÃO')
}
