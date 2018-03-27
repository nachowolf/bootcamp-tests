
var countAllFromTown = function(a, b) {
  var plates = a.split(", ");

  var townPlates = [];

  for (var i = 0; i<plates.length; i++){
    var plate = plates[i];

  if (plate.startsWith(b)){
    townPlates.push(plate);

  }
  }
var result = townPlates.length;
 return result
}
var fromStellies = countAllFromTown("CL 124, CY 567, CL 345, CJ 456, CL 341","CL");
console.log(fromStellies);
