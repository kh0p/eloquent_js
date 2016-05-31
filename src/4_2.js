function reverseArray(array) {
  var output = [];
  for (var i = array.length-1; i >= 0; i--)
  	output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  var output = [];
  for (var i = array.length-1; i >= 0; i--)
  	output.push(array[i]);
  arrayValue = output;
}
