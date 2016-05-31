function rangeBasic(start, end) {
  var output = [start];
  for (var start; start < end; start++)
    output.push(start);
  return output;
}

function range(start, end, step = 1) {
  var output = [start];
  if (step > 0) {
  	for (var start; start < end; start++)
      output.push(start+step);
  } else {
    for (var start; start > end; start--)
      output.push(start+step);
  }
  return output;
}

function sum(array) {
  var output = 0;
  for (var i = 0; i < array.length; i++)
    output += array[i];
  return output;
}
