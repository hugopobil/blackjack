// Define los palos y las cartas
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Crea una función para generar la baraja
function generateCards() {
    const cards = [];
    for (const suit of suits) {
        for (const value of values) {
            const card = {
                suit: suit,
                value: value
            };
            cards.push(card);
        }
    }
    return cards;
}

// Genera una baraja
const miCards = generateCards()

console.log(miCards)

