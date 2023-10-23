class Game {
    constructor(cards, container) {
        this.container = container
        this.player = new Player(this.container);
        this.dealer = new Dealer(this.container);
        this.bet = 0
        this.cards = cards
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.x = this.container.offsetWidth
        this.y = this.container.offsetHeight;
    }

    start() {
        // comienza el juego de black jack
        // El dealer te da la bienvenida
        // this.dealer.welcome_message()

        // input for bets
        const numericInput = document.createElement("input");
        numericInput.type = "number";
        numericInput.id = "betInput";
        numericInput.placeholder = "Your Bet...";
        this.container.appendChild(numericInput);

        const playerControls = document.createElement("div")
        playerControls.id = "player-controls"
        this.container.appendChild(playerControls)

        const hitButton = document.createElement("button")
        hitButton.className = "playerButton"
        hitButton.textContent = "Hit"
        playerControls.appendChild(hitButton)

        const standButton = document.createElement("button")
        standButton.className = "playerButton"
        standButton.textContent = "Stand"
        playerControls.appendChild(standButton)

        const doubleButton = document.createElement("button")
        doubleButton.className = "playerButton"
        doubleButton.textContent = "Double"
        playerControls.appendChild(doubleButton)

        const splitButton = document.createElement("button")
        splitButton.className = "playerButton"
        splitButton.textContent = "Split"
        playerControls.appendChild(splitButton)

        const surrenderButton = document.createElement("button")
        surrenderButton.className = "playerButton"
        surrenderButton.textContent = "Surrender"
        playerControls.appendChild(surrenderButton)

        const exitButton = document.createElement("button")
        exitButton.id = "exitButton"
        exitButton.textContent = "Exit Game"
        this.container.appendChild(exitButton)

        // visualizacion en la pantalla de juego del cash del player
        const playerCash = document.createElement("div")
        playerCash.textContent = this.player.cash
        playerCash.id = "player-cash"
        this.container.appendChild(playerCash)


        exitButton.addEventListener("click", () => {
            window.location.reload()
        });


    }
}