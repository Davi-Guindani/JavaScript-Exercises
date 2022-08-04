let distancia = prompt ("qual é a velocidade em anos-luz?")
let opcao = prompt ("pc parsec\nau unidade astronomica\nkm quilometros")
let convert

switch (opcao)
{
    case "pc":
        convert = distancia * 0.306601
    break
    case "au":
        convert = distancia * 63241,1
    break
    case "km":
        convert = distancia * 9,5 * Math.pow (10, 12)
    break
    default:
        alert ("<" + distancia + "> " + "<" + "Unidade não recnhecida: Converão fora do escopo" + ">")
    break
}
alert ("<" + distancia + "> " + "<" + opcao + "> " + "<" + convert + ">")