var countRegNumber = function(list) {
  var result1 = list.split(",")
  var result2 = result1.length
  return result2
};

var regCount = countRegNumber('CA 182736, CY 523519, CJ 812328');
console.log(regCount);
