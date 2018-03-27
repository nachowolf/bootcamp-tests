var salesData = [
  { department: 'hardware', sales: 4500, day: 'Monday' },
  { department: 'outdoor', sales: 1500, day: 'Monday' },
  { department: 'carpentry', sales: 5500, day: 'Monday' },
  { department: 'hardware', sales: 7500, day: 'Tuesday' },
  { department: 'outdoor', sales: 2505, day: 'Tuesday' },
  { department: 'carpentry', sales: 1540, day: 'Tuesday' },
  { department: 'hardware', sales: 1500, day: 'Wednesday' },
  { department: 'outdoor', sales: 8507, day: 'Wednesday' },
  { department: 'carpentry', sales: 8009, day: 'Wednesday' },
  { department: 'hardware', sales: 12000, day: 'Thursday' },
  { department: 'outdoor', sales: 18007, day: 'Thursday' },
  { department: 'carpentry', sales: 6109, day: 'Thursday' },
  { department: 'hardware', sales: 7005, day: 'Friday' },
  { department: 'outdoor', sales: 12006, day: 'Friday' },
  { department: 'carpentry', sales: 16109, day: 'Friday' },
];

var mostProfitableDepartment = function(a) {


  var hardwareSales = 0;
  var outdoorSales = 0;
  var carpentrySales = 0;

  for (var i = 0; i < a.length; i++) {
    var list = a[i];

    var department = list.department;

    if (department == 'hardware' && list.sales > 0) {
     hardwareSales += list.sales;
      }

    if (department == 'outdoor' && list.sales > 0) {
      outdoorSales += list.sales;
    }

    if (department == 'carpentry'&& list.sales > 0) {
      carpentrySales += list.sales;

    }
  }
  if (hardwareSales > outdoorSales && hardwareSales > carpentrySales){
    return "hardware";
  }

  else if (outdoorSales > hardwareSales && outdoorSales > carpentrySales){
    return "outdoor";
  }

  else if (carpentrySales > hardwareSales && carpentrySales > outdoorSales){
    return "carpentry";
}

else if (outdoorSales === hardwareSales){
  return "hardware and outdoor";
}

else if (outdoorSales === carpentrySales){
  return "outdoor and carpentry";
}

else if (hardwareSales === carpentrySales){
  return "hardware and carpentry";
}

else {
  return "nothing";
}
};

var profit = mostProfitableDepartment(salesData);
console.log(profit);
