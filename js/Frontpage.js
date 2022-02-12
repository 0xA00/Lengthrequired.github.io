var i =0;
function alternate(){
  var doc = document.getElementById("whitespace");
  var color = ["#121E2D","white"];
  doc.style.backgroundColor = color[i];
  doc.style.color=color[i];
  i = (i+1)%color.length;
}
setInterval(alternate,1000);

