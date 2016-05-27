var size = 8;
var grid = '';
for(var i = 0; i < size; i++) {

  if (i % 2 == 0) {
    for(var j = 0; j < size; j++) {
      if (j % 2 == 0) grid += ' ';
      else grid += '#';

    }
    console.log(grid);
  }

  else {
    for(var j = 0; j < size; j++) {
      if (j % 2 == 1) grid += ' ';
      else grid += '#';
    }
    console.log(grid);
  }

  grid='';
  console.log('\n');
}
