var fromWhere = function(plate) {

  if (plate.startsWith("CY")) {
    return "Bellville"
  }

  else if (plate.startsWith("CJ")) {
    return "Paarl"
  }

  else if (plate.startsWith("CA")) {
    return "Cape Town"
  }

  else{
    return "Some other place!"
  }
}

var car = fromWhere("CY 2446264");
console.log(car);
      
