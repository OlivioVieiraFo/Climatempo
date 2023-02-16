// Exemplos de conversão: Strings -> Inteiro: parseInt()
var numeroDecimal = parseInt("50");
console.log(numeroDecimal);
console.log(typeof numeroDecimal);

var hexadecimal = parseInt("0xF")
console.log(hexadecimal);

// Exemplos de conversão: Strings -> Floats: parseFloat()
var mouse = parseFloat("29.90");
console.log(mouse);
console.log(typeof mouse);

var uva = parseFloat("5.00")
console.log(uva);

// Exemplos de conversão: Numeros -> Strings: toString()
var num = 33;
var idade = num.toString();
console.log(idade);
console.log(typeof idade);

// Exemplos de conversão: Templates Literais
var funcionario = {
    nome: 'Fulano de Tal',
    idade: 40,
    profissao: 'Software Enginner',
    salario: 10000.00
}

console.log(`O funcionario ${funcionario.nome} tem ${funcionario.idade}.
            Ele trabalha de ${funcionario.profissao} e ganha R$ ${funcionario.salario}`) 