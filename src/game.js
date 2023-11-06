// GAME
// funcion para calcular la cuenta total de las cartas del jugador y dealer segun el palo y el rango
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

// variable de color para los botones del juego
const color_botones_jugador_activado = "green"

// clase juego
class Game {
    constructor(cards, container) {
        this.container = container
        this.player = new Player(this.container);
        this.dealer = new Dealer(this.container);
        this.bet = 0
        this.cards = cards
        this.spare_cards = cards
        this.state = "new-hand";
        this.hitButton = document.createElement("button")
        this.standButton = document.createElement("button")
        this.exitButton = document.createElement("button")
        this.resetBetButton = document.createElement("button")
        this.doubleButton = document.createElement("button")
        this.exitArrow = document.createElement("img")
        this.playerCash = document.createElement("div")
        this.currentBet = document.createElement("div")
        this.currentCount = document.createElement("div")
        this.result_message = document.createElement("div")
        this.currentDealerCount = document.createElement("div")
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

        this.doubleButton.className = "playerButton"
        this.doubleButton.textContent = "Double"
        playerControls.appendChild(this.doubleButton)
        this.doubleButton.style.backgroundColor = color_botones_jugador_activado

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

        // CURRENT COUNT
        this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`
        this.currentCount.id = "current-count"
        this.container.appendChild(this.currentCount)

        // CURRENT DEALER COUNT
        this.currentDealerCount.textContent = `Dealer count is ${check_count(this.dealer.cards)}`
        this.currentDealerCount.id = "dealer-count"
        this.container.appendChild(this.currentDealerCount)

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

        //Reset bet button
        this.resetBetButton.className = "resetBetButton"
        this.resetBetButton.textContent = "Reset"
        bjBoard.appendChild(this.resetBetButton)
        this.resetBetButton.style.backgroundColor = color_botones_jugador_activado


        // The player can always exit the game, at any given point
        this.exitButton.addEventListener("click", () => {
            window.location.reload()
        })

        this.handleState()
    }

    handleState() {

        let player_start_cards_number = 2
        let dealer_start_cards_number = 1

        if (this.state === "new-hand") {

            this.resetBetButton.disabled = false
            
            if (this.player.cash < 0) {
                console.log("the game has ended, player has no cash")
                window.location.reload()
            }

            console.log(`The player has $${this.player.cash}`)
            console.log(`Current bet is $${this.bet}`)

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
                this.result_message.textContent = ""
                if (this.bet > 0) {

                    this.playerCash.textContent = `Player cash $${this.player.cash}`

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

                    this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`

                    for (let i = 0; i < dealer_start_cards_number; i++) {
                        this.dealer.cards.push(this.cards[0])
                        this.cards.shift()
                    }

                    console.log("Player cards: ", this.player.cards, "Count: ", check_count(this.player.cards))
                    console.log("Dealer cards: ", this.dealer.cards, "Count: ", check_count(this.dealer.cards))

                    // Muestra las cartas en pantalla en la x y la y que se la proporcionado
                    const initialLeft = 200;
                    const gap = 50;

                    this.dealer.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft + i * gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '90px', `${left}px`);
                        cardImage.generateCards();
                    })

                    const backCard = document.createElement("div")
                    backCard.style.backgroundImage = 'url(./img/backCard.png)'
                    backCard.classList.add('card');
                    backCard.style.backgroundSize = "cover"
                    backCard.style.top ='90px';
                    backCard.style.left = "450px";
                    backCard.style.width = "180px"
                    backCard.style.height = "250px"
                    this.container.appendChild(backCard)

                    this.currentDealerCount.textContent = `Dealer count is ${check_count(this.dealer.cards)}`

                    this.player.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft + i * gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '380px', `${left}px`);
                        cardImage.generateCards();
                    })

                    this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`
                    this.state = "hand-started"
                    this.handleState()
                }
            }

            this.resetBetButton.onclick = () => {
                this.player.cash += this.bet
                this.bet = 0;
                this.currentBet.textContent = `Current bet is $${this.bet}`
                this.playerCash.textContent = `Player cash $${this.player.cash}`

            }
        }

        // the initial bet has been placed, so now the player can ask for cards
        if (this.state === "hand-started") {
            this.resetBetButton.disabled = true
            this.doubleButton.disabled = false
            this.player.count = check_count(this.player.cards)
            this.dealer.count = check_count(this.dealer.cards)
            this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`

            this.hitButton.onclick = () => {

                // give the player a new card
                this.player.cards.push(this.cards[0])
                this.cards.shift()
                this.player.count = check_count(this.player.cards)
                this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`
                console.log("Player cards: ", this.player.cards, "Count: ",check_count(this.player.cards))

                // repetimos el proceso de generar las cartas para mostrar todas las cartas del jugador
                const initialLeft = 200;
                const gap = 50;
                this.player.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft + i * gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '380px', `${left}px`);
                        cardImage.generateCards();
                    })

                if (this.player.count > 21) {
                    console.log("The player has more than 21 and loses the hand")
                    this.state = "hand-end"
                    this.handleState()
                }
            }

            this.doubleButton.onclick = () => {
                // the player only receives one card and the bet doubles
                this.currentBet.textContent = `Current bet is $${this.bet * 2}`
                this.player.cash -= this.bet
                this.playerCash.textContent = `Player cash $${this.player.cash}`
                this.player.cards.push(this.cards[0])
                this.cards.shift()

                // check the new count
                this.player.count = check_count(this.player.cards)
                this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`

                const initialLeft = 200;
                const gap = 50;
                this.player.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft + i * gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '380px', `${left}px`);
                        cardImage.generateCards();
                    })

                this.doubleButton.disabled = true

                // dealer automatically starts his hand
                for (let i = 0; i < 10; i++) {
                    this.dealer.count = check_count(this.dealer.cards)

                    if (this.dealer.count === 21) {
                        console.log("dealer wins")
                        break;
                    } else if (this.dealer.count <= 21 && this.dealer.count >= 17) {
                        break;
                    } else if (this.dealer.count < 21) {
                        console.log("dealer plays")
                        this.dealer.cards.push(this.cards[0])
                        this.cards.shift()
                        this.dealer.count = check_count(this.dealer.cards)
                    } else if (this.dealer.count > 21) {
                        break;
                    }
                    this.currentDealerCount.textContent = `Dealer count is ${check_count(this.dealer.cards)}`

                    this.dealer.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft + i * gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '90px', `${left}px`);
                        cardImage.generateCards();
                    })

                    setTimeout(() => {
                        this.state = "hand-end"
                        this.handleState()
                    }, 2000);

                }
            }

            this.standButton.onclick = () => {
                const initialLeft = 200;
                const gap = 50

                for (let i = 0; i < 10; i++) {
                    this.dealer.count = check_count(this.dealer.cards)

                    if (this.dealer.count === 21) {
                        console.log("dealer wins")
                        break;
                    } else if (this.dealer.count <= 21 && this.dealer.count >= 17) {
                        break;
                    } else if (this.dealer.count < 21) {
                        console.log("dealer plays")
                        this.dealer.cards.push(this.cards[0])
                        this.cards.shift()
                        this.dealer.count = check_count(this.dealer.cards)
                    } else if (this.dealer.count > 21) {
                        break;
                    }
                    this.currentDealerCount.textContent = `Dealer count is ${check_count(this.dealer.cards)}`

                    this.dealer.cards.forEach((card, i) => {
                        const left = initialLeft + initialLeft + i * gap;
                        const cardImage = new Card(this.container, card.suit, card.value, '90px', `${left}px`);
                        cardImage.generateCards();
                    })

                    setTimeout(() => {
                        this.state = "hand-end"
                        this.handleState()
                    }, 2000);
                }
            }
        }

        if (this.state === "hand-end") {
            const cards = document.getElementsByClassName("card")
            for (let card of cards) {
                card.style.display = "none"
            }

            console.log("player count", this.player.count)
            console.log("dealer count", this.dealer.count)
            this.result_message.id = "result-message"

            if (this.player.count > 21) {
                console.log("dealer wins")
                this.result_message.textContent = "Dealer wins, to play another hand start your bet"
                this.dealer.cash += this.bet
            } else if (this.dealer.count > 21) {
                console.log("player wins")
                this.result_message.textContent = "Player wins, to play another hand start your bet"
                this.player.cash += this.bet * 2
                this.dealer.cash -= this.bet * 2
            } else if (this.player.count === this.dealer.count){
                console.log("empate")
                this.result_message.textContent = "None wins, to play another hand start your bet"
                this.player.cash += this.bet
                this.dealer.cash += this.bet
            } else if (this.player.count > this.dealer.count
                && this.player.count <= 21
                && this.dealer.count <= 21) {
                console.log("player wins")
                this.result_message.textContent = "Player wins, to play another start your bet"
                this.player.cash += this.bet * 2
                this.dealer.cash -= this.bet
            } else if (this.player.count < this.dealer.count
                && this.player.count <= 21
                && this.dealer.count <= 21) {
                console.log("dealer wins")
                this.result_message.textContent = "Dealer wins, to play another hand start your bet"
                this.dealer.cash += this.bet
            }

            if (this.cards.length === 0) {
                this.cards = this.spare_cards
            }

            this.container.appendChild(this.result_message)
            this.playerCash.textContent = `Player cash $${this.player.cash}`
            this.dealer.cards = []
            this.player.cards = []
            this.bet = 0
            this.currentCount.textContent = `Current player count is ${check_count(this.player.cards)}`
            this.currentDealerCount.textContent = `Dealer count is ${check_count(this.dealer.cards)}`
            this.currentBet.textContent = `Current bet is $${this.bet}`
            this.state = "new-hand"
            this.handleState()
        }
    }
}