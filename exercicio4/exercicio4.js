let pilotName = prompt ("Qual é o seu nome, piloto?")
let shipVelocity = 0
let targetVelocity = prompt ("A qual velocidade você quer chegar?")

let answer = confirm ("Você confirma que velocidade desejada é de " + targetVelocity + " km/s?")
if (answer == true) shipVelocity = targetVelocity

if (shipVelocity <= 0) alert ("Nave parada. Considere partir e aumentar a velocidade")
if (shipVelocity < 40) alert ("Você está devagar, podemos acelerar mais")
if (shipVelocity >= 40 && shipVelocity < 80) alert ("Parece uma boa velocidade para manter")
if (shipVelocity >= 80 && shipVelocity < 100) alert ("Velocidade alta. Considere diminuir")
if (shipVelocity >= 100) alert ("Velocidade perigosa, controle automático forçado")

alert ("Nome do piloto: " + pilotName + "\nVelocidade: " + shipVelocity)