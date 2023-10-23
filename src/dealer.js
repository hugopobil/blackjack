class Dealer {
    constructor(container) {
        this.container = container
        this.cash = 1000000000
        this.cards = []
    }

    welcome_message() {
        const welcome_message = document.createElement("div")
        welcome_message.id = "dealer-welcome-message"
        welcome_message.textContent = "Welcome player, please make your bets to start playing, good luck!"
        this.container.appendChild(welcome_message)
    }
}

