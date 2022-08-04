let nomeNave = prompt ("Digite o nome da espaçonave")
let nomeInvertido = ""

 for (let i = nomeNave.length - 1; i >= 0; i --) 
 {
    if (nomeNave[i] == "e") break
    nomeInvertido += nomeNave[i]
 }

 alert (nomeInvertido)