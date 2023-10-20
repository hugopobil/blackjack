class Player {
    constructor(container) {
        this.container = container
        this.cash = 100 // always start with the same amount of cash
    }

    apostar(bet) {
        this.cash -= bet
    }

    // Metodos del jugador

}