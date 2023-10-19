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

window.addEventListener("load", () => {
  const container = document.getElementById("bj-board");

  // Mezclar las cartas aqui y pasarlas ya mezcladas
 function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
 }
  let numero_de_barajas = 6
  let totalCards = []
  for (let i = 0; i <= numero_de_barajas-1; i++) {
    const cardsShuffled = shuffleArray(cards)
    totalCards.push(cardsShuffled)
  }

  console.log(totalCards)

  const game = new Game(totalCards, container);
  game.start();
});

/*
Se me ha ocurrido que lo primero que podemos ir haciendo es definiendo unos botones que esten linkeados
con los scripts de js y que vayan haciendo algunas funciones:

1. Boton de merclar:
2. Seleccionar el numero de barajas --> Funcion que guarde en una array todas las barajas según el numero,
y que cada vez que cambie el numero se vuelvan a meter
 */


