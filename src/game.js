/*
Aqui creamos la clase del juego del BlackJack
Esta clase va a controlar el juego entero,

 */

class Game {
    constructor(cards, container) {
        this.container = container
        // this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.dealer = new Dealer(this.container);
        this.cards = cards
        this.bets = 0
    }

    start() {
       const backgroundMusic = document.getElementById('background-music');

       // ruidos de fondo de casino, ya tenemos el ambiente del juego
       setInterval(() => {
           backgroundMusic.play()
       }, 60000 * 3)
    }

}