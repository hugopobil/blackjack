function check_count(cards) {
    let total_count = 0
    for (let card of cards) {
        console.log(card)
        if (card["value"] === "K" || card["value"] === "Q" || card["value"] === "J") {total_count += 10}
        else if (card["value"] === "A" && total_count <= 21) {total_count += 11}
        else if (card["value"] === "A" && total_count > 21) {total_count += 1}
        else {total_count += Number(card.value)}}
    return total_count
}

// add new card
// this.player.cards.push(this.cards[0])
// this.cards.shift()

class Game {
    constructor(cards, container) {
        this.container = container
        this.player = new Player(this.container);
        this.dealer = new Dealer(this.container);
        this.bet = 50
        this.cards = cards
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.x = this.container.offsetWidth
        this.y = this.container.offsetHeight;
        this.state = "initial-bet";

        /*
        states updates the phase of the game, this can be:
        - initial-bet
        - seguros
        - players-turn
        - dealers-turn
        - hand-end
         */
    }

    start() {
        const bjBoard = document.getElementById ("bj-board")
        bjBoard.style.backgroundImage = 'url("./img/inicio_clean.png")'

        // TODO: Inputs for bets depreciated (chips button used instead)
        // const numericInput = document.createElement("input");
        // numericInput.type = "number";
        // numericInput.id = "betInput";
        // numericInput.placeholder = "Your Bet...";
        // this.container.appendChild(numericInput);

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

        // TODO: Player cash visualization at all times
        // const playerCash = document.createElement("div")
        // playerCash.textContent = this.player.cash
        // playerCash.id = "player-cash"
        // this.container.appendChild(playerCash)

        const chipsStack = document.createElement("div")
        chipsStack.id = "chips-stack"
        this.container.appendChild(chipsStack)

        const chips = [5, 10, 25, 50, 100]

        for (let chip of chips) {
            let chipsButton = document.createElement("button")
            chipsButton.id = `chips_${chip}`
            chipsButton.textContent = `${chip}`
            chipsButton.className = `chips`
            chipsStack.appendChild(chipsButton)
        }

        // The player can always exit the game, at any given point
        exitButton.addEventListener("click", () => {
            window.location.reload()
        });

        let player_start_cards_number = 2
        let dealer_start_cards_number = 2

        hitButton.addEventListener("click", () => {
            if (this.bet !== 0 && this.state === "initial-bet") {

                for (let i = 0; i < player_start_cards_number; i++) {
                    this.player.cards.push(this.cards[0])
                    this.cards.shift()
                }
                console.log("Player cards: ", this.player.cards)
                console.log("Player start count -->", check_count(this.player.cards))

                // for (let i = 0; i < dealer_start_cards_number; i++) {
                //     this.dealer.cards.push(this.cards[0])
                //     this.cards.shift()
                // }

                // use this to test the seguros state
                this.dealer.cards = [{suit: 'Diamonds', value:'A'}, {suit: 'Diamonds', value:'4'}]

                console.log("Dealer cards: ", this.dealer.cards)
                console.log("dealer start count -->", check_count(this.dealer.cards))

                // change state, once cards have been given to both player and dealer
                this.state = "seguros"
            }

            if (this.state === "seguros") {
                for (let i = 0; i < dealer_start_cards_number; i++) {
                    if (this.dealer.cards[i].value === "A") {
                        console.log('Dealer has an A')

                        // TODO: Change button style for options (hit, double, surrender)
                        surrenderButton.addEventListener("click", () => {
                            this.state = "hand-end"
                            let value_to_return = this.bet / 2
                            this.player.cash += value_to_return
                            this.dealer.cash += value_to_return
                            this.bet = 0
                        })

                        hitButton.addEventListener("click", () => {
                            this.player.cards.push(this.cards[0])
                            this.cards.shift()
                            this.player.count = check_count(this.player.cards)
                            console.log("player count -->", this.player.count)
                            if (this.player.count > 21) {
                                console.log("The player has lost")
                                this.state = "hand-end"
                            }
                        })
                    }
                }
            }
        });


    }
}