let nomeMaisVelho = prompt ("Digite o nome da pessoa mais velha")
let idadeMaisVelho = prompt ("Digite a idade da pessoa mais velha")
let nomeMaisNovo = prompt ("Digite o nome da pessoa mais nova")
let idadeMaisNovo = prompt ("Digite a idade da pessoa mais nova")

let dif = Math.abs (idadeMaisVelho - idadeMaisNovo)
alert ("Pessoa mais velha:\nNome: " + nomeMaisVelho + "\nIdade: " + idadeMaisVelho)
alert ("Pessoa mais nova:\nNome: " + nomeMaisNovo + "\nIdade: " + idadeMaisNovo)
alert ("Diferença de idade: " + dif)