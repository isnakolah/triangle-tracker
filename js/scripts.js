//Getting the sides value from the HTML as floats
var sideA = parseFloat(document.getElementById("sideA"))
var sideB = parseFloat(document.getElementById("sideB"))
var sideC = parseFloat(document.getElementById("sideC"))
// Getting the data for the functions.
//making all sides to be in an array.
let allSides = [sideA, sideB, sideC]
//Getting the maximum side.
function maxSide() {
  let max = Math.max.apply(null, allSides)
}
//Arranging the sides in ascending order.
allSides = allSides.sort((a, b) => a-b );
smallSides = allSides.slice();
smallSides.length = 2; //Retains the first two entities of the array.
console.log(smallSides[0])

//remember to use the += operator
