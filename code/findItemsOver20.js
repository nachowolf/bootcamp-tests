var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var findItemsOver20 = function(a) {

  var itemsOver20 = [];

  for (var i=0; i<a.length; i++) {
    var items = a[i];



    if ( items.qty > 20){
      itemsOver20.push(items);
    }
  }
    return itemsOver20;
  }



  var test = findItemsOver20(itemList)
  console.log(test);
