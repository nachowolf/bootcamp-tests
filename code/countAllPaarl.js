var countAllPaarl = function(a) {
  var plates = a.split(", ");

  var paarlPlates = [];

  for (var i = 0; i<plates.length; i++){
    var plate = plates[i];

  if (plate.startsWith("CJ")){
    paarlPlates.push(plate);

  }
  }
var result = paarlPlates.length;
 return result
}
var car = countAllPaarl("HB 56555, CJ 66526, HJ 16226, CJ 3236525");
console.log(car)
