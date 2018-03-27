var isWeekday = function(day) {

  var weekDay = !day.startsWith("S");
  return weekDay

};

var result = isWeekday("Tuesday");
console.log(result);
