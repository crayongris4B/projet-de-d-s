//display 
let affiche = document.getElementById('affiche');
let currentO = document.getElementById('current0');
let turnDiv = document.getElementById('turn');
let imageElem = document.getElementById('diceImage');
//points current
let pointCurrent = [
  document.getElementById('current0'),
  document.getElementById('current1')
];
//points global
let globalScore = [
  document.getElementById('global0'),
  document.getElementById('global1')
];
// BUTTONS
const newGame = document.getElementById('newGame');
const hold = document.getElementById('hold');
const clouk = document.getElementById('clouk');
//NAMES
let names = [
  document.getElementById('name1'),
  document.getElementById('name2')
];
/* names[0].textContent = "joueur 1"
names[1].textContent = "joueur 2" */

// initialize variable
let curentPlayer = 0;
turnDiv.textContent = names[curentPlayer].textContent

const regle = 'Bienvenue sur ce petit jeu. Le premier à 100 points a gagné !!! QUE 💪 GAGNE !'
alert(regle);
/* 
-> nombre aléatoire
-> ajoute le nombre dans le score current.
-> si 1 current=0
 */
clouk.addEventListener('click', () => {
    let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    imageElem.src = `images/de-${random}.png`;
    // condition dice !== 1
    if (random !== 1) {
        affiche.innerHTML = random;
        pointCurrent[curentPlayer].textContent = parseInt(pointCurrent[curentPlayer].textContent) + random;
    } else{
        affiche.innerHTML = random;
        pointCurrent[curentPlayer].textContent = 0
        nextplayer();
    }
});
/* 
->ajout currentScore au GlobalScore
->remettre à zero current score
->nextPlayer
 */
hold.addEventListener('click', () => {
    nextplayer();
});
// le tour prochain
function nextplayer() {
  globalScore[curentPlayer].textContent = parseInt(globalScore[curentPlayer].textContent) + parseInt(pointCurrent[curentPlayer].textContent);
  pointCurrent[curentPlayer].textContent = 0;
  if (parseInt(globalScore[curentPlayer].textContent) >= 100) {
    Swal.fire(`Bravo ${names[curentPlayer].textContent} vous avez gagné`);
    zero();
  };
  curentPlayer === 1 ? curentPlayer = 0 : curentPlayer = 1; 
  turnDiv.textContent = names[curentPlayer].textContent
}
/*nouveau jeu 
->curentScore, GlobalScore à zero
->tour joueur 1
*/
/* newGame.addEventListener('click', zero) */
function zero() {
    pointCurrent[0].textContent = 0;
    pointCurrent[1].textContent = 0;
    globalScore[0].textContent = 0;
    globalScore[1].textContent = 0;
    curentPlayer = 0;
    names[0].textContent = "Joueur 1";
    names[1].textContent = "Joueur 2"
    
}
newGame.addEventListener('click', ()=>{
    zero()
    names[0].textContent = prompt('Quel est votre prénom');
    names[1].textContent = prompt('Quel est votre prénom');
    turnDiv.textContent = names[curentPlayer].textContent
})
