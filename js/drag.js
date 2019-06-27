//function $(id) {
//  return document.getElementById(id);
//}

dragula([document.getElementById('drag-elements'), document.getElementById('drop-target')], {
  revertOnSpill: true
}).on('drop', function(el) {
  var games = "";
  if (document.getElementById('drop-target').children.length > 0) {
    games = "<h3>Top 10 Games</h3>";
    for (var i=0; i< document.getElementById('drop-target').children.length; i++) {    
      games += i+1 + ". " + document.getElementById('drop-target').children[i].dataset.bg;
      games += "<br>";
    }
    document.getElementById('display').innerHTML = games;
  } else {
    document.getElementById('display').innerHTML = "Select your top 10";
  }

});

