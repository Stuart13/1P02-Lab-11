function generate() {
  var nouns = ["pogo stick", "pickle", "paperclip", "porta-potty", "piece of paper"];
  var adjectives =  ["purple", "presumptuous", "perfect", "papery", "peaceful"];
  var num1 = Math.floor( Math.random()*5 );
  var num2 = Math.floor( Math.random()*5 );

  document.getElementById("output").innerHTML += "What a " + adjectives[num2] + " " + nouns[num1] + "!" + "<br />" + "<br />";
}
