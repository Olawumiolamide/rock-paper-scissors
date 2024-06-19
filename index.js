//to prevent the animation on loading
setTimeout(() => {
    document.boby.classList.remove("loading");
}, 500);

// DOM ELEMENTS
const btnRules = document.querySelector(".game-rules");
const btnClose = document.querySelector(".close-button");
const modalRules = document.querySelector(".modal");


const SELECTIONS = [
  {
    name: "paper",
    beats: "rock"
  },
  {
    name: "scissors",
    beats: "paper"
  },
  {
    name: "rock",
    beats: "scissors"
  },
]

const selectionButtons = document.querySelectorAll(".selection-button");
const gameDiv = document.querySelector(".main-game");
const outcomeDiv = document.querySelector(".outcome");
const outcomeDivs = document.querySelectorAll(".final-outcome");

const resultWinner = document.querySelector('.outcome-winner')
const resultText = document.querySelector('.outcome-text')

//Main-game Logic

selectionButtons.forEach( button => {
  button.addEventListener('click', () => { 
    const selectionName = button.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    choose(selection)

  })
})

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose(){
  const rand = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[rand]
}
function displayResults (outcome) {
  outcomeDivs.forEach((outcomeDiv, idx) => {
    setTimeout(() => {
      outcomeDiv.innerHTML = `
      <div class = 'selection ${outcome[idx].name}'>
       <img src="images/icon-${outcome[idx].name}.svg" alt="${outcome[idx].name}" />
       </div>
      `;

    }, idx * 1000);
  });

  gameDiv.classList.toggle('hidden')
  outcomeDiv.classList.toggle('hidden')
 
}

function displayWinner(outcome){
  setTimeout(() => {
    const userWins = isWinner(outcome)
    const aiWins = isWinner(outcome.reverse());

    if(userWins) {
      resultText.innerText = 'you win'
    } else if(aiWins) {
      resultText.innerText = "you lose"
    } else {
      resultText.innerText = 'draw'
    }
  }, 1000);

  resultWinner.classList.toggle('hidden')
  outcomeDiv.classList.toggle('show-winner')
}

function isWinner(results) {
  return results[0].beats === results[1].name;
}


//To make rules show or hide
btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });