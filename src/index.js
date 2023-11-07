const cards = [
  { suit: 'hearts', value: '2' },
  { suit: 'hearts', value: '3' },
  { suit: 'hearts', value: '4' },
  { suit: 'hearts', value: '5' },
  { suit: 'hearts', value: '6' },
  { suit: 'hearts', value: '7' },
  { suit: 'hearts', value: '8' },
  { suit: 'hearts', value: '9' },
  { suit: 'hearts', value: '10' },
  { suit: 'hearts', value: 'J' },
  { suit: 'hearts', value: 'Q' },
  { suit: 'hearts', value: 'K' },
  { suit: 'hearts', value: 'A' },
  { suit: 'diamonds', value: '2' },
  { suit: 'diamonds', value: '3' },
  { suit: 'diamonds', value: '4' },
  { suit: 'diamonds', value: '5' },
  { suit: 'diamonds', value: '6' },
  { suit: 'diamonds', value: '7' },
  { suit: 'diamonds', value: '8' },
  { suit: 'diamonds', value: '9' },
  { suit: 'diamonds', value: '10' },
  { suit: 'diamonds', value: 'J' },
  { suit: 'diamonds', value: 'Q' },
  { suit: 'diamonds', value: 'K' },
  { suit: 'diamonds', value: 'A' },
  { suit: 'clubs', value: '2' },
  { suit: 'clubs', value: '3' },
  { suit: 'clubs', value: '4' },
  { suit: 'clubs', value: '5' },
  { suit: 'clubs', value: '6' },
  { suit: 'clubs', value: '7' },
  { suit: 'clubs', value: '8' },
  { suit: 'clubs', value: '9' },
  { suit: 'clubs', value: '10' },
  { suit: 'clubs', value: 'J' },
  { suit: 'clubs', value: 'Q' },
  { suit: 'clubs', value: 'K' },
  { suit: 'clubs', value: 'A' },
  { suit: 'spades', value: '2' },
  { suit: 'spades', value: '3' },
  { suit: 'spades', value: '4' },
  { suit: 'spades', value: '5' },
  { suit: 'spades', value: '6' },
  { suit: 'spades', value: '7' },
  { suit: 'spades', value: '8' },
  { suit: 'spades', value: '9' },
  { suit: 'spades', value: '10' },
  { suit: 'spades', value: 'J' },
  { suit: 'spades', value: 'Q' },
  { suit: 'spades', value: 'K' },
  { suit: 'spades', value: 'A' }
]

// Mezclar las cartas aqui y pasarlas ya mezcladas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

window.addEventListener("load", () => {
  const container = document.getElementById("bj-board");
  const newGameButton = document.createElement("button")
  const howToPlayButton = document.createElement("button")
  const welcomeMessage = document.createElement("div")
  const quote = document.createElement("div")

  welcomeMessage.textContent = "Welcome to Iron-Jack!"
  welcomeMessage.id = "welcome-message-intro"

  quote.textContent = new Quote().generate()
  quote.id = "quote-intro"

  newGameButton.textContent = "New Game"
  newGameButton.className = "button-intro"
  howToPlayButton.textContent = "Instructions"
  howToPlayButton.className = "button-intro"

  container.appendChild(welcomeMessage)
  container.appendChild(quote)
  container.appendChild(newGameButton)
  container.appendChild(howToPlayButton)

  let totalCards = shuffleArray(cards)
      .concat(shuffleArray(cards), shuffleArray(cards), shuffleArray(cards), shuffleArray(cards), shuffleArray(cards))


  newGameButton.addEventListener("click" , () => {
    welcomeMessage.remove()
    quote.remove()
    newGameButton.remove()
    howToPlayButton.remove()
    const game = new Game(totalCards, container);
    welcomeMessage.remove()
    quote.remove()
    newGameButton.remove()
    howToPlayButton.remove()
    game.start();
  })

  howToPlayButton.addEventListener("click" , () => {
    const howtoplay = new howToPlay(container)
    welcomeMessage.remove()
    quote.remove()
    newGameButton.remove()
    howToPlayButton.remove()
    howtoplay.display()
  })
});