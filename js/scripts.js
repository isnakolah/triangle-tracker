function submitIt(){
  //Getting the sides value from the HTML as floats
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC = parseFloat(document.getElementById("sideC").value);
  // Getting the data for the functions.
  //making all sides to be in an array.
  let validate;
  if (sideA > 0 && sideB > 0 && sideC ){  
    validate = true;
  } else {
    validate = false;
    }
  if (validate == false){
    alert("Please input a valid number.")
    } else runCode();
  function runCode(){
    let allSides = [sideA, sideB, sideC]
    //Getting the maximum side.
    let max = Math.max.apply(null, allSides)
    //Arranging the sides in ascending order.
    allSides = allSides.sort((a, b) => a-b );
    smallSides = allSides.slice();
    smallSides.length = 2; //Retains the first two entities of the array.
    if (Math.pow(smallSides[0], 2)+Math.pow(smallSides[1], 2)===      Math.pow(max, 2)) {
      alert("The measurements " +sideA + ", "+ sideB+ ", "+ sideC+ " "+"form a right angled triangle."); 
     } else if(smallSides[0]===smallSides[1] && smallSides[1]===max){
      alert("The measurements "+ sideA+ ", "+ sideB+ ", "+ sideC+ " "+"form an equilateral triangle." );
     } else if (smallSides[0]+smallSides[1]<=max) {
      alert("The measurements " +sideA + ", "+ sideB+ ", "+ sideC+ " "+"do not form triangle." );
     } else if (smallSides[0] === smallSides[1] && smallSides[0]=== max || smallSides[0] === max ||  smallSides[1] === max)  {
      alert("The measurements " +sideA + ", "+ sideB+ ", "+ sideC+ " "+"constitute to an isosceles triangle." );
    } else if (smallSides[0] !== smallSides[1] || smallSides[0] !== max ||  smallSides[1] !== max ) {
      alert("The measurements " +sideA+ ", "+ sideB+ ", "+ sideC+ " "+"make up a scalene triangle." );
    } else {
      alert("The measurements "+ sideA+ ", "+ sideB+ ", "+ sideC+ " "+"form an equilateral triangle." );
    }
  }   
}
