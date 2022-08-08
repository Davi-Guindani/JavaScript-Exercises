const hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceships => {return spaceships[1] > 9}).map(spaceships => {return spaceships[0]})
let ongoingHitchPlataform = hitchedSpaceships.findIndex(spaceships => {return spaceships[2] == false})
let highlightedSpaceShips = hitchedSpaceships.map(spaceships => {return spaceships[0].toUpperCase()})

let message = "Espaçonaves com mais de 9 membros: " + crewGreaterThan9.join(", ") + "\nPlataformas com embarque em processo: " + (ongoingHitchPlataform + 1) + "\nEspaçonaves destacadas: " + highlightedSpaceShips.join(", ")

alert (message)