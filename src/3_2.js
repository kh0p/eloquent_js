// I'm not sure if it is correct fix for the isEven(-1) problem.
function isEven(x) {
	if (x < 0) {
  	var stringX = String(x);
		var cutStringX = stringX.substring(1);
    x = parseInt(cutStringX, 10);
    isEven(x);
  }
	else if (x == 0) return true;
  else if (x == 1) return false;
  else return isEven(x-2);
}
