function kastTerning(){
    console.log("Terningen er kastet");
   var tal;
    tal = Math.floor((Math.random()*6)+1);
   
    
    document.getElementById("resText").innerHTML = tal;
  }
  
  function derudaf() {
  var text = "";
  var i;
  for (i = 0; i < 10; i++) {
      text += i + "<br>";
  }
  document.getElementById("resLoop").innerHTML = text;
    }