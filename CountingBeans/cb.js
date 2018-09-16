// console.log("Hello World!");
/* */
function countB(stringVar) {
    let tal = 0;
    console.log("I'm counting B's in string " + stringVar);
    for (let i = 0; i < stringVar.length; i++) {
      //console.log(stringVar[i]);
      if (stringVar.charAt(i) == 'B') {
        tal ++;
      }
    }
    console.log(tal);
    return tal;
  }
  
  // let count = countB("DollyB");
  // console.log(count);
  
  
  
  function countChars(stringVar, kar) {
    let tal = 0;
    console.log("I'm counting " + kar + " in string " + stringVar);
    for (let i = 0; i < stringVar.length; i++) {
      //console.log(stringVar[i]);
      if (stringVar.charAt(i) == kar) {
        tal ++;
      }
    }
    console.log(tal);
    alert (tal);
    return tal;
  }
  
  function karCount(){
    let s = document.getElementById('tekst').value;
    let b = document.getElementById('bogstav').value;
    countChars(s,b);
  }