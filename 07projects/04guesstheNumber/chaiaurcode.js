let randomNumber =   parseInt(Math.random()*100 + 1)

const submit =  document.querySelector('#subt')

const userInput =  document.querySelector('#guessField')

const guessslot =  document.querySelector('.guesses')

const remaining =  document.querySelector('.lastResult')

const lowOrHigh =  document.querySelector('.lowOrHi')

const startOver =  document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click' , function (e) {
        e.preventDefault()
       const guess = parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if ( guess < 1){
        alert('Please enter a valid number')
    } else if (guess > 100){
        alert('Please enter a valid number')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over. Random number ${randomNumber}`)
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guess right random Number ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Your guess num is smaller than random Num `)
    } else if (guess > randomNumber) {
        displayMessage(`Your guess num is larger than random Num `)
    } 
}

function displayGuess(guess) {
    userInput.value = ''
    guessslot.innerHTML += `${guess} ,`
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
 }

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    userInput.innerHTML = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add = ('button')
    p.innerHTML = `<h2 id='newgame'> Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function endGame() {
    const newGamebutton = document.querySelector('#newgame')
    newGamebutton.addEventListener('click' , (e)=> {
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}