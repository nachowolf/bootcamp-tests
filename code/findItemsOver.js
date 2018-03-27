var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

// function findItemsOver

var findItemsOver = function(b, c) {
   var itemsOver30 = [];

  for (var i=0; i<b.length; i++) {
    var items = b[i];



    if ( items.qty > c){
      itemsOver30.push(items);
    }
  }
    return itemsOver30;
}

var test = findItemsOver(itemList)
  console.log(test);
