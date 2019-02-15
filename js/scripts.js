//Getting the sides from the HTML
var sideA = parseFloat(document.getElementById("sideA"))
var sideB = parseFloat(document.getElementById("sideB"))
var sideC = parseFloat(document.getElementById("sideC"))
let allSides = [sideA, sideB, sideC]
function maxSide() {
  let max = Math.max(...allSides)
}
