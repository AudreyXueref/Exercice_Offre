function Offre(){
  var range = document.getElementById("myRange").value;
  document.getElementById("prix").innerHTML = range+"€";

  if (range > 27)  {
    document.getElementById("offre3").style.border= "7px solid #8fceff";
    document.getElementById("offre2").style.border="none";
    document.getElementById("offre1").style.border="none";

  } else if (range > 18) {
    document.getElementById("offre2").style.border= "7px solid #8fceff";
    document.getElementById("offre1").style.border="none";
    document.getElementById("offre3").style.border="none";

  } else {
    document.getElementById("offre1").style.border= "7px solid #8fceff";
    document.getElementById("offre2").style.border="none";
    document.getElementById("offre3").style.border="none";
  }
}
