import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const pronoun = ['the', 'our', 'my', 'her', 'your', 'his', 'their', 'its', 'that', 'this'];
  const adj = ['small', 'hot', 'huge', 'tiny', 'spicy', 'soggy', 'cursed', 'thicc', 'crusty', 'suspicious', 'forbidden', 'blessed', 'haunted', 'sweaty', 'drunk', 'naked', 'gassy', 'chunky', 'greasy', 'chaotic'];
  const noun = ['cat', 'burrito', 'grandma', 'raccoon', 'toilet', 'goblin', 'avocado', 'hamster', 'mullet', 'toenail', 'armpit', 'hedgehog', 'waffle', 'llama', 'pickle', 'clown', 'sloth', 'nugget', 'potato', 'cactus', 'booze', 'pigeon', 'walrus', 'noodle', 'pancake'];

  let domains = [];
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        domains.push(pronoun[p] + adj[a] + noun[n] + '.com');
      }
    }
  }

  function generateDomain(){
    let randomIndex = Math.floor(Math.random() * domains.length);
    document.getElementById('domain').innerHTML = domains[randomIndex];
  }

  generateDomain();
  document.getElementById('domainBtn').addEventListener('click', generateDomain);
};
