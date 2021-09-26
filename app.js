const diceTriggerEl = document.querySelector('.dice__trigger')
const diceImageEl = document.querySelector('.dice__image')

function getDiceNumber() {
  return Math.floor(Math.random() * 6 + 1)
}

function showDice() {
  diceTriggerEl.addEventListener('click', function() {
    let myRandomNumber = getDiceNumber()
    diceImageEl.src = `images/dice${myRandomNumber}.png`
  })
}

showDice()