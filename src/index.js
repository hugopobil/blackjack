const cards = [
  { suit: 'Hearts', value: '2' },
  { suit: 'Hearts', value: '3' },
  { suit: 'Hearts', value: '4' },
  { suit: 'Hearts', value: '5' },
  { suit: 'Hearts', value: '6' },
  { suit: 'Hearts', value: '7' },
  { suit: 'Hearts', value: '8' },
  { suit: 'Hearts', value: '9' },
  { suit: 'Hearts', value: '10' },
  { suit: 'Hearts', value: 'J' },
  { suit: 'Hearts', value: 'Q' },
  { suit: 'Hearts', value: 'K' },
  { suit: 'Hearts', value: 'A' },
  { suit: 'Diamonds', value: '2' },
  { suit: 'Diamonds', value: '3' },
  { suit: 'Diamonds', value: '4' },
  { suit: 'Diamonds', value: '5' },
  { suit: 'Diamonds', value: '6' },
  { suit: 'Diamonds', value: '7' },
  { suit: 'Diamonds', value: '8' },
  { suit: 'Diamonds', value: '9' },
  { suit: 'Diamonds', value: '10' },
  { suit: 'Diamonds', value: 'J' },
  { suit: 'Diamonds', value: 'Q' },
  { suit: 'Diamonds', value: 'K' },
  { suit: 'Diamonds', value: 'A' },
  { suit: 'Clubs', value: '2' },
  { suit: 'Clubs', value: '3' },
  { suit: 'Clubs', value: '4' },
  { suit: 'Clubs', value: '5' },
  { suit: 'Clubs', value: '6' },
  { suit: 'Clubs', value: '7' },
  { suit: 'Clubs', value: '8' },
  { suit: 'Clubs', value: '9' },
  { suit: 'Clubs', value: '10' },
  { suit: 'Clubs', value: 'J' },
  { suit: 'Clubs', value: 'Q' },
  { suit: 'Clubs', value: 'K' },
  { suit: 'Clubs', value: 'A' },
  { suit: 'Spades', value: '2' },
  { suit: 'Spades', value: '3' },
  { suit: 'Spades', value: '4' },
  { suit: 'Spades', value: '5' },
  { suit: 'Spades', value: '6' },
  { suit: 'Spades', value: '7' },
  { suit: 'Spades', value: '8' },
  { suit: 'Spades', value: '9' },
  { suit: 'Spades', value: '10' },
  { suit: 'Spades', value: 'J' },
  { suit: 'Spades', value: 'Q' },
  { suit: 'Spades', value: 'K' },
  { suit: 'Spades', value: 'A' }
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