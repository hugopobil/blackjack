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

// colores
const color_botones_jugador_activado = "green"
const color_botones_jugador_desactivado = "darkgreen"

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
    }
    
    start() {

        const bjBoard = document.getElementById ("bj-board")
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
        exitArrow.id ="exitArrow"
        exitArrow.src = "./img/back-arrow.png"
        exitButton.id = "exitButton"
        exitButton.textContent = "Back"
        exitButton.appendChild(exitArrow)
        this.container.appendChild(exitButton)

        // TODO: Player cash visualization at all times
        // const playerCash = document.createElement("div")
        // playerCash.textContent = this.player.cash
        // playerCash.id = "playerCash"
        // this.container.appendChild(playerCash)

        const chipsStack = document.createElement("div")
        chipsStack.id = "chips-stack"
        this.container.appendChild(chipsStack)

        const chips = [5, 10, 25, 50, 100]

        for (let chip of chips) {
            let chipButton = document.createElement("button")
            chipButton.id = `chip-${chip}`
            /*chipsButton.textContent = `${chip}`*/
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

        //No habría que meter aquí un clicCount o clicState o algo asi? Para que la primera vez que se hace clic se repartan dos cartas
        // y el resto de veces se reparta solo una

        //const clicState = false
        hitButton.addEventListener("click", () => {
            //if (this.bet !== 0 && this.state === "initial-bet" && clicState)
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
                console.log("Dealer start count -->", check_count(this.dealer.cards))

                if (this.player.count === 21) {
                    console.log("Player has won the round")
                    this.player.cash += (this.bet * 2) + (this.bet / 2)
                    this.dealer.cash -= (this.bet * 2) + (this.bet / 2)
                }

                // change state, once cards have been given to both player and dealer
                this.state = "seguros"
            }

            // process to let the player decide what happens after delear gets A
            if (this.state === "seguros") {

                const safe_message = document.createElement("div")
                safe_message.className = "safe-message"
                safe_message.textContent = "The delear has an A! You can continue with your hand by hitting HIT"
                            + " or press Surrender and get back 50% of your bet now!"

                for (let i = 0; i < dealer_start_cards_number; i++) {
                    if (this.dealer.cards[i].value === "A") {
                        console.log('Dealer has an A')
                        exitButton.disabled = true
                        this.container.appendChild(safe_message)

                        // ignore the message and get another card on your hand
                        hitButton.addEventListener("click", () => {
                            console.log(`The player continues playing and has a count of ${this.player.count}`)
                            this.state = "hand-playing"
                            safe_message.remove()
                            this.player.cards.push(this.cards[0])
                            this.cards.shift()
                            this.player.count = check_count(this.player.cards)
                            console.log("player count -->", this.player.count)
                            if (this.player.count > 21) {
                                this.state = "hand-end"
                            }
                        })

                        // stand button
                        standButton.addEventListener("click", () => {
                            console.log(`The player stands and has a count of ${this.player.count}`)
                        })

                        // double button
                        doubleButton.addEventListener("click", () => {
                            console.log(`The player doubles and has a count of ${this.player.count}`)
                            const current_bet = this.bet
                            this.player.cash -= current_bet
                            this.bet += current_bet
                            this.player.cards.push(this.cards[0])
                            this.cards.shift()
                            this.state = "hand-double"
                        })

                        // split button
                        splitButton.addEventListener("click", () => {
                            console.log(`The player splits and has a count of ${this.player.count}`)
                        })

                        // surrender option to get 50% of bet and play another hand
                        surrenderButton.addEventListener("click", () => {
                            console.log(`The player surrenders and has a count of ${this.player.count}`)
                            this.state = "hand-end"
                            safe_message.remove()
                            let value_to_return = this.bet / 2
                            this.player.cash += value_to_return
                            this.dealer.cash += value_to_return
                            this.bet = 0
                        })
                    }
                }
            }

            if (this.state === "hand-playing") {
                exitButton.disabled = false
            }

            if (this.state === "hand-end") {
                exitButton.disabled = false
            }

            if (this.state === "hand-double") {
                exitButton.disabled = false
            }

            // esta parte es la ultima que se tiene que programar
            // ya que se convierten en dos manos, encapsular el codigo en funciones de jugador y deleaer
            if (this.state === "split-hand") {
                exitButton.disabled = false
            }
            
            //Muestra las cartas en pantalla en la x y la y que se la proporcionado
            const initialLeft = 300;
            const gap = 50;

            this.dealer.cards.forEach((card, i) => {
                const left = initialLeft + initialLeft * i + gap;
                const cardImage = new Card(this.container, card.suit, card.value, '70px', `${left}px`);
                cardImage.generateCards();
            })

            this.player.cards.forEach((card, i) => {
                const left = initialLeft + initialLeft * i + gap;
                const cardImage = new Card(this.container, card.suit, card.value, '420px', `${left}px`);
                cardImage.generateCards();
            })
        });

    }
}