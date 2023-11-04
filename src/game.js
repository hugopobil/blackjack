function check_count(cards) {
    let total_count = 0

    for (let card of cards) {
        // console.log(card)
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
    // console.log({  cards, total_count })
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
        // this.width = this.container.offsetWidth;
        // this.height = this.container.offsetHeight;
        // this.x = this.container.offsetWidth
        // this.y = this.container.offsetHeight;
        this.state = "new-hand";
        this.hitButton = document.createElement("button")
        this.standButton = document.createElement("button")
        this.exitButton = document.createElement("button")
        this.exitArrow = document.createElement("img")
        this.playerCash = document.createElement("div")
        this.currentBet = document.createElement("div")
    }

    start() {
        const bjBoard = document.getElementById("bj-board")
        bjBoard.style.backgroundImage = 'url("./img/inicio_clean.png")'

        const playerControls = document.createElement("div")
        playerControls.id = "player-controls"
        this.container.appendChild(playerControls)


        this.hitButton.className = "playerButton"
        this.hitButton.textContent = "Hit"
        playerControls.appendChild(this.hitButton)
        this.hitButton.style.backgroundColor = color_botones_jugador_activado

        this.standButton.className = "playerButton"
        this.standButton.textContent = "Stand"
        playerControls.appendChild(this.standButton)
        this.standButton.style.backgroundColor = color_botones_jugador_activado

        // const doubleButton = document.createElement("button")
        // doubleButton.className = "playerButton"
        // doubleButton.textContent = "Double"
        // // playerControls.appendChild(doubleButton)
        // doubleButton.style.backgroundColor = color_botones_jugador_activado
        //
        // const splitButton = document.createElement("button")
        // splitButton.className = "playerButton"
        // splitButton.textContent = "Split"
        // // playerControls.appendChild(splitButton)
        // splitButton.style.backgroundColor = color_botones_jugador_activado
        //
        // const surrenderButton = document.createElement("button")
        // surrenderButton.className = "playerButton"
        // surrenderButton.textContent = "Surrender"
        // // playerControls.appendChild(surrenderButton)
        // surrenderButton.style.backgroundColor = color_botones_jugador_activado


        this.exitArrow.id = "exitArrow"
        this.exitArrow.src = "./img/back-arrow.png"
        this.exitButton.id = "exitButton"
        this.exitButton.textContent = "Back"
        this.exitButton.appendChild(this.exitArrow)
        this.container.appendChild(this.exitButton)

        // PLAYER CASH

        this.playerCash.textContent = `Player cash $${this.player.cash}`
        this.playerCash.id = "player-cash"
        this.container.appendChild(this.playerCash)

        // CURRENT BET
        this.currentBet.textContent = `Current bet is $${this.bet}`
        this.currentBet.id = 'current-bet'
        this.container.appendChild(this.currentBet)

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
        this.exitButton.addEventListener("click", () => {
            window.location.reload()
        })

        this.handleState()
    }

    handleState() {

        let player_start_cards_number = 2
        let dealer_start_cards_number = 2

        if (this.state === "new-hand") {

            console.log(`The player has $${this.player.cash}`)
            console.log(`Current bet is $${this.bet}`)

            // disable the rest of the buttons
            this.hitButton.disabled = true
            this.standButton.disabled = true
            // this.doubleButton.disabled = true
            // splitButton.disabled = true
            // surrenderButton.disabled = true

            const chip5 = document.getElementById("chip-5")
            chip5.disabled = false
            chip5.onclick = () => {
                this.hitButton.disabled = false
                this.standButton.disabled = false
                this.bet += 5
                this.currentBet.textContent = `Current bet is $${this.bet}`
                this.player.cash -= 5
                this.playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $5 and the current bet is ${this.bet}`)
            }

            const chip10 = document.getElementById("chip-10")
            chip10.disabled = false
            chip10.onclick = () => {
                this.hitButton.disabled = false
                this.standButton.disabled = false
                this.bet += 10
                this.currentBet.textContent = `Current bet is $${this.bet}`
                this.player.cash -= 10
                this.playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $10 and the current bet is ${this.bet}`)
            }

            const chip25 = document.getElementById("chip-25")
            chip25.disabled = false
            chip25.onclick = () => {
                this.hitButton.disabled = false
                this.standButton.disabled = false
                this.bet += 25
                this.currentBet.textContent = `Current bet is $${this.bet}`
                this.player.cash -= 25
                this.playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $25 and the current bet is ${this.bet}`)
            }

            const chip50 = document.getElementById("chip-50")
            chip50.disabled = false
            chip50.onclick = () => {
                this.hitButton.disabled = false
                this.standButton.disabled = false
                this.bet += 50
                this.currentBet.textContent = `Current bet is $${this.bet}`
                this.player.cash -= 50
                this.playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $50 and the current bet is ${this.bet}`)
            }

            const chip100 = document.getElementById("chip-100")
            chip100.disabled = false
            chip100.onclick = () => {
                this.hitButton.disabled = false
                this.standButton.disabled = false
                this.bet += 100
                this.currentBet.textContent = `Current bet is $${this.bet}`
                this.player.cash -= 100
                this.playerCash.textContent = `Player cash $${this.player.cash}`
                console.log(`The player has bet $100 and the current bet is ${this.bet}`)
            }

            this.hitButton.onclick = () => {
                // console.log("primero")
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

                    for (let i = 0; i < dealer_start_cards_number; i++) {
                        this.dealer.cards.push(this.cards[0])
                        this.cards.shift()
                    }

                    console.log("Player cards: ", this.player.cards, "Count: ", check_count(this.player.cards))
                    console.log("Dealer cards: ", this.dealer.cards, "Count: ", check_count(this.dealer.cards))

                    // Muestra las cartas en pantalla en la x y la y que se la proporcionado
                    const initialLeft = 300;
                    const gap = 50;

                    this.dealer.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft * i + gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '80px', `${left}px`);
                        cardImage.generateCards();
                    })

                    this.player.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft * i + gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '420px', `${left}px`);
                        cardImage.generateCards();
                    })

                    // if (this.player.count === 21) {
                    //     console.log("Player has 21 and wins the hand")
                    //     this.player.cash += (this.bet * 2) + (this.bet / 2)
                    //     this.dealer.cash -= (this.bet * 2) + (this.bet / 2)
                    //     this.state = "hand-end"
                    // }

                    this.state = "hand-started"
                    this.handleState()
                }
            }
        }

        // the initial bet has been placed, so now the player can ask for cards
        if (this.state === "hand-started") {
            this.player.count = check_count(this.player.cards)
            this.dealer.count = check_count(this.dealer.cards)
            // continue playing and ignore the message
            this.hitButton.onclick = () => {

                // give the player a new card
                this.player.cards.push(this.cards[0])
                this.cards.shift()
                this.player.count = check_count(this.player.cards)
                console.log("Player cards: ", this.player.cards, "Count: ", check_count(this.player.cards))
                // console.log(this.player.cards, check_count(this.player.cards))

                if (this.player.count > 21) {
                    console.log("The player has more than 21 and loses the hand")
                    this.state = "hand-end"
                    this.handleState()
                }
            }

            // stand button
            this.standButton.onclick = () => {
                // this.state = "player-stand"
                // this.handleState()

                // the delear starts his hand
                for (let i = 0; i < 10; i++) {
                    this.dealer.count = check_count(this.dealer.cards)

                    if (this.dealer.count === 21) {
                        console.log("dealer wins")
                        this.state = "hand-end"
                        this.handleState()
                        break;
                    } else if (this.dealer.count <= 21 && this.dealer.count >= 17) {
                        console.log("dealer stand")
                        this.state = "hand-end"
                        this.handleState()
                        break;
                    } else if (this.dealer.count < 21) {
                        console.log("dealer plays")
                        this.dealer.cards.push(this.cards[0])
                        this.cards.shift()
                        this.dealer.count = check_count(this.dealer.cards)
                    } else if (this.dealer.count > 21) {
                        console.log("dealer loses")
                        this.state = "hand-end"
                        this.handleState()
                        break;
                    }
                }
            }

            // surrender and end current hand
            // surrenderButton.addEventListener("click", () => {
            //     console.log("Player surrenders")
            //
            //     let value_to_return = this.bet / 2
            //     this.player.cash += value_to_return
            //     this.dealer.cash += value_to_return
            //     this.bet = 0
            //
            //     this.state = "new-hand"
            // })

        }
        // esta parte es la ultima que se tiene que programar
        // ya que se convierten en dos manos, encapsular el codigo en funciones de jugador y deleaer
        if (this.state === "hand-end") {

            const cards = document.getElementsByClassName("card")
            for (let card of cards) {
                card.style.display = "none"
            }

            console.log("player count", this.player.count)
            console.log("dealer count", this.dealer.count)

            if (this.player.count > 21) {
                console.log("dealer wins")
                // this.player.cash -= this.bet * 2
                this.dealer.cash += this.bet
            } else if (this.dealer.count > 21) {
                console.log("player wins")
                this.player.cash += this.bet * 2
                this.dealer.cash -= this.bet * 2
            } else if (this.player.count === this.dealer.count){
                console.log("empate")
                this.player.cash += this.bet
                this.dealer.cash += this.bet
            } else if (this.player.count > this.dealer.count
                && this.player.count <= 21
                && this.dealer.count <= 21) {
                console.log("player wins")
                this.player.cash += this.bet * 2
                this.dealer.cash -= this.bet
            } else if (this.player.count < this.dealer.count
                && this.player.count <= 21
                && this.dealer.count <= 21) {
                console.log("dealer wins")
                // this.player.cash -= this.bet * 2
                this.dealer.cash += this.bet
            }

            this.playerCash.textContent = `Player cash $${this.player.cash}`
            this.dealer.cards = []
            this.player.cards = []
            this.bet = 0
            this.currentBet.textContent = `Current bet is $${this.bet}`
            this.state = "new-hand"
            this.handleState()
        }
    }
}