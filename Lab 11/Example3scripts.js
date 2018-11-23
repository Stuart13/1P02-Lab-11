function generate() {
  document.getElementById("output").innerHTML = "<br />";
  var input = Number (document.getElementById("UserInput").value);
  var numarray = new Array

  for (i=0; i<=input; i++) {
    numarray.push(i);
    document.getElementById("output").innerHTML += numarray[i] + "<br />" + "<br />";
  }
}
