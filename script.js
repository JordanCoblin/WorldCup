var pRonaldo = 30;

function update() {
	var a = document.getElementById('pRonaldo');
	a.innerHTML = pRonaldo;
}

$(document).ready( function() {
	$('table').tablesorter();
	/*$('table td').eq(3).html('200');*/
	update();
	}
);


/*var table = document.getElementById('tblOne');

var rowLength = table.rows.length;

for(var i=0; i<rowLength; i+=1){
  var row = table.rows[i];

  //your code goes here, looping over every row.
  //cells are accessed as easy

  var cellLength = row.cells.length;
  for(var y=0; y<cellLength; y+=1){
    var cell = row.cells[y];

    //do something with every cell here
  }
}*/