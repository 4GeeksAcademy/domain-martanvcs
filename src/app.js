import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'puedes', 'code'];
  let extensions = ['.com', '.net', '.us', '.io', '.es'];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let hacked = false;

       
        for (let ext of extensions) {
          let extText = ext.replace('.', '');
          if (n.endsWith(extText)) {
            let hackedName = n.slice(0, -extText.length);
            console.log(p + a + hackedName + ext);
            hacked = true;
           
          }
        }

        if (!hacked) {
          for (let ext of extensions) {
            console.log(p + a + n + ext);
          }
        }
      }
    }
  }
};


//en total se me han generado 64 
