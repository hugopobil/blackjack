function check_count(cards) {
    let total_count = 0
    for (let card of cards) {
        if (card["value"] === "K" || card["value"] === "Q" || card["value"] === "J") {
            total_count += 10
        } else if (card["value"] === "A" && total_count <= 21) {
            total_count += 11
        } else if (card["value"] === "A" && total_count > 21) {
            total_count += 1
        } else {
            total_count += Number(card.value)
        }
    }
    return total_count
}

// colores
const color_botones_jugador_activado = "green"
const color_botones_jugador_desactivado = "darkred"

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
        this.state = "";
    }

    start() {
        // use this cards
        this.dealer.cards = [{suit: 'Diamonds', value: 'A'}, {suit: 'Diamonds', value: '4'}]

        const bjBoard = document.getElementById("bj-board")
        bjBoard.style.backgroundImage = 'url("./img/inicio_clean.png")'

        const playerControls = document.createElement("div")
        playerControls.id = "player-controls"
        this.container.appendChild(playerControls)

        const hitButton = document.createElement("button")
        hitButton.className = "playerButton"
        hitButton.textContent = "Hit"
        playerControls.appendChild(hitButton)
        hitButton.style.backgroundColor = color_botones_jugador_activado

        const standButton = document.createElement("button")
        standButton.className = "playerButton"
        standButton.textContent = "Stand"
        playerControls.appendChild(standButton)
        standButton.style.backgroundColor = color_botones_jugador_activado

        const doubleButton = document.createElement("button")
        doubleButton.className = "playerButton"
        doubleButton.textContent = "Double"
        playerControls.appendChild(doubleButton)
        doubleButton.style.backgroundColor = color_botones_jugador_activado

        const splitButton = document.createElement("button")
        splitButton.className = "playerButton"
        splitButton.textContent = "Split"
        playerControls.appendChild(splitButton)
        splitButton.style.backgroundColor = color_botones_jugador_activado

        const surrenderButton = document.createElement("button")
        surrenderButton.className = "playerButton"
        surrenderButton.textContent = "Surrender"
        playerControls.appendChild(surrenderButton)
        surrenderButton.style.backgroundColor = color_botones_jugador_activado

        const exitButton = document.createElement("button")
        const exitArrow = document.createElement("img")
        exitArrow.id = "exitArrow"
        exitArrow.src = "./img/back-arrow.png"
        exitButton.id = "exitButton"
        exitButton.textContent = "Back"
        exitButton.appendChild(exitArrow)
        this.container.appendChild(exitButton)

        // PLAYER CASH

        const playerCash = document.createElement("div")
        playerCash.textContent = `Player cash $${this.player.cash}`
        playerCash.id = "player-cash"
        this.container.appendChild(playerCash)

        // CHIP STACK

        const chipsStack = document.createElement("div")
        chipsStack.id = "chips-stack"
        this.container.appendChild(chipsStack)

        const chips = [5, 10, 25, 50, 100]

        for (let chip of chips) {
            let chipButton = document.createElement("button")
            chipButton.id = `chip-${chip}`
            chipButton.className = `chip`
            chipsStack.appendChild(chipButton)

            const coloredChip = document.getElementById(`chip-${chip}`);
            coloredChip.style.background = `url('./img/chip-${chip}.png')`;
            coloredChip.style.backgroundSize = 'contain';
            coloredChip.style.borderStyle = "none";
        }

        // The player can always exit the game, at any given point
        exitButton.addEventListener("click", () => {
            window.location.reload()
        });

        let player_start_cards_number = 2
        let dealer_start_cards_number = 2

        this.state = "new-hand"

        if (this.state === "new-hand") {
            console.log(`The player has $${this.player.cash}`)
            console.log(`Current bet is $${this.bet}`)

            // disable the rest of the buttons
            hitButton.disabled = false
            standButton.disabled = true
            doubleButton.disabled = true
            splitButton.disabled = true
            surrenderButton.disabled = true

            const chip5 = document.getElementById("chip-5")
            chip5.addEventListener("click", () => {
                this.bet += 5
                this.player.cash -= 5
                playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $5 and the current bet is ${this.bet}`)
            })

            const chip10 = document.getElementById("chip-10")
            chip10.addEventListener("click", () => {
                this.bet += 10
                this.player.cash -= 10
                playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $10 and the current bet is ${this.bet}`)
            })

            const chip25 = document.getElementById("chip-25")
            chip25.addEventListener("click", () => {
                this.bet += 25
                this.player.cash -= 25
                playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $25 and the current bet is ${this.bet}`)
            })

            const chip50 = document.getElementById("chip-50")
            chip50.addEventListener("click", () => {
                this.bet += 50
                this.player.cash -= 50
                playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $50 and the current bet is ${this.bet}`)
            })

            const chip100 = document.getElementById("chip-100")
            chip100.addEventListener("click", () => {
                this.bet += 100
                this.player.cash -= 100
                playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $100 and the current bet is ${this.bet}`)
            })

            hitButton.addEventListener("click", () => {
                if (this.bet > 0) {

                    // disable all chips button
                    chip5.disabled = true
                    chip10.disabled = true
                    chip25.disabled = true
                    chip50.disabled = true
                    chip100.disabled = true

                    for (let i = 0; i < player_start_cards_number; i++) {
                        this.player.cards.push(this.cards[0])
                        this.cards.shift()
                    }

                    console.log("Player cards: ", this.player.cards, "Count: ", check_count(this.player.cards))
                    console.log("Dealer cards: ", this.dealer.cards, "Count: ", check_count(this.dealer.cards))

                    if (this.player.count === 21) {
                        console.log("Player has 21 and wins the hand")
                        this.player.cash += (this.bet * 2) + (this.bet / 2)
                        this.dealer.cash -= (this.bet * 2) + (this.bet / 2)
                    }
                    this.state = "hand-started"
                }
            })
        }

        // the initial bet has been placed, so now the player can ask for cards
        if (this.state === "hand-started") {
            const safe_message = document.createElement("div")
            safe_message.className = "safe-message"
            safe_message.textContent = "The delear has an A! You can continue with your hand by hitting HIT"
                + " or press Surrender and get back 50% of your bet now!"

            for (let i = 0; i < dealer_start_cards_number; i++) {
                if (this.dealer.cards[i].value === "A") {
                    console.log('Dealer has an A')
                    exitButton.disabled = true
                    this.container.appendChild(safe_message)
                }
            }

            // continue playing and ignore the message
            hitButton.addEventListener("click", () => {
                this.state = "hand-playing"
                safe_message.remove()

                // give the player a new card
                this.player.cards.push(this.cards[0])
                this.cards.shift()

                if (this.player.count > 21) {
                    this.state = "hand-end"
                }
            })

            // stand button
            standButton.addEventListener("click", () => {
                this.state = "player-stand"
            })

            // surrender and end current hand
            surrenderButton.addEventListener("click", () => {
                console.log("Player surrenders")
                safe_message.remove()

                let value_to_return = this.bet / 2
                this.player.cash += value_to_return
                this.dealer.cash += value_to_return
                this.bet = 0

                this.state = "new-hand"
            })
        }

    }
}