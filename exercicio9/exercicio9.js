let spaceShip =
{
    name: "",
    type: "",
    maxSpeed: 0,
    currentSpeed: 0,
    speedUp: function (acc) {this.currentSpeed += acc}
}
function init ()
{
    spaceShip.name = prompt ("Digite o nome da nave")
    spaceShip.type = prompt ("Digite o tipo da nave")
    spaceShip.maxSpeed = Number (prompt ("Digite a velocidade máxima"))
}
function acelerate () 
{
    let acc = Number (prompt ("Em quanto você quer aumentar a velocidade?"))
    spaceShip.speedUp (acc)
    if (spaceShip.currentSpeed > spaceShip.maxSpeed) alert ("Velocidade máxima ultrapassada")
}
function stop ()
{
    alert ("Nome: " + spaceShip.name +"\nTipo: " + spaceShip.type + "\nVelocidade: " + spaceShip.currentSpeed)
}
function menu ()
{
    let option
    do
    {
        option = prompt ("Digite 1 para acelerar e 2 para parar")
        switch (option)
        {
            case "1":
                acelerate()
            break
            case "2":
                stop()
            break
        }
    } while (option != 2)
}

init ()
menu ()