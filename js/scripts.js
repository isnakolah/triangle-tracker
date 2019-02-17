function submitIt(){
//Getting the sides value from the HTML as floats
var sideA = parseFloat(document.getElementById("sideA").value);
var sideB = parseFloat(document.getElementById("sideB").value);
var sideC = parseFloat(document.getElementById("sideC").value);
// Getting the data for the functions.
//making all sides to be in an array.
let allSides = [sideA, sideB, sideC]
//Getting the maximum side.
  let max = Math.max.apply(null, allSides)
//Arranging the sides in ascending order.
allSides = allSides.sort((a, b) => a-b );
smallSides = allSides.slice();
smallSides.length = 2; //Retains the first two entities of the array.
//remember to use the += operator
if (Math.pow(smallSides[0], 2)+Math.pow(smallSides[1], 2)=== Math.pow(max, 2)) {
  alert("The triangle " +sideA + ", "+ sideB+ ", "+ sideC+ " "+"is right angled" )
} else if (smallSides[0]+smallSides[1]<=max) {
  alert("The measurements " +sideA + ", "+ sideB+ ", "+ sideC+ " "+"does not form triangle." )
} else if (smallSides[0] === smallSides[1] || smallSides[0] === max || smallSides[1] === max)  {
  alert("The triangle " +sideA + ", "+ sideB+ ", "+ sideC+ " "+"is an isosceles triangle." )
} else if (smallSides[0] !== smallSides[1] || smallSides[0] !== max || smallSides[1] !== max ) {
  alert("The triangle " +sideA+ ", "+ sideB+ ", "+ sideC+ " "+"is a scalene triangle." )
} else {
  alert("The triangle "+ sideA+ ", "+ sideB+ ", "+ sideC+ " "+"is an equilateral triangle." )
}
}
