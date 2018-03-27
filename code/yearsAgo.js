var yearsAgo = function(b) {
  var year = new Date();
  var a = year.getFullYear()
  var result = a - b;
  return result

};
var years = yearsAgo(2015);
console.log(years);
