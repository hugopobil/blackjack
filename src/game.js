/*
Aqui creamos la clase del juego del BlackJack
Esta clase va a controlar el juego entero,

 */

class Game {
    constructor(cards, container) {
        this.container = container
        this.cards = cards
        this.dealer_money = 1000
        // De momento todos empiezan con 100 de cash
        this.player_money = 100
    }
    // TODO: Se crea a partir de un boton de inicio del juego
    // TODO: Diseñar una pantalla de inicio, simple

    start() {

        // Barajar las cartas



        // Utilizamos este intervalo para crear los frames por segundo, incluimos el metodo update
        setInterval(() => {
        }, 1000 / 24);


    }

}