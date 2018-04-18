var sumAll = function(x,y) {
  var list = [];
  for (var i = x; i <= y; i++) {list.push(i);}
  var sum = list.reduce((acc, list) => acc + list);
  return(sum);
}

module.exports = sumAll


/*problem when x and y are swapped throwing errors