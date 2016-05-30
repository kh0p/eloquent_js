function countBs(text) {
  var count = 0;
  for (var i = 0; i < text.length; i++) {
  	if (text.charAt(i) == 'B') count += 1;
  }
  return count;
}

function countChar(text, character) {
  var count = 0;
  for (var i = 0; i < text.length; i++) {
  	if (text.charAt(i) == character) count += 1;
  }
  return count;
}
