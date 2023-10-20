class Player {
    constructor(container) {
        this.container = container
        // El cash lo controla el juego, cuando se inicia la instancia de jugador
        this.cash = 100
    }

    apostar(bet) {
        this.cash -= bet
    }

    // Metodos del jugador

}