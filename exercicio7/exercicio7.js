function slowDown (speed, printer) {
    while (speed > 0)
    {
        let newSpeed = speed -= 20
        if (newSpeed < 0) newSpeed = 0
        printer (newSpeed)
    } 
    return newSpeed
}

let dale = slowDown (150, function (speed) {
    if (speed == 0) alert ("Nave parada")
    else alert ("Nova velocidade: " + speed)
})

