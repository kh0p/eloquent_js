function isEven(x) {
  if (x < 0) {
  	var stringX = String(x);
    stringX =- stringX[0];
    var x = Number(stringX);
    isEven(x);
  }
	else if (x == 0) return true;
  else if (x == 1) return false;
  else return isEven(x-2);
}
