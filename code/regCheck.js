var regCheck = function(plate, prov) {
  var car = plate.endsWith(prov);

  return car
};

var isMP = regCheck("DV 23 LP GP", "MP")
console.log(isMP);
