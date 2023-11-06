class howToPlay {
    constructor(container) {
        this.container = container
    }

    display() {

        const bjBoard = document.getElementById("bj-board")
        bjBoard.style.backgroundImage = 'url("./img/inicio_clean.png")'

        const instruction_title = document.createElement("h1")
        instruction_title.id = "instructions-title"
        const instruction_text = document.createElement("p")
        instruction_text.className = "instructions-text"
        const returnButton = document.createElement("button")
        returnButton.id = "instructions-return-button"

        const instruction_text_2 = document.createElement("div")
        const instruction_text_3 = document.createElement("div")
        const instruction_text_4 = document.createElement("div")
        instruction_text_2.className = "instructions-text"
        instruction_text_3.className = "instructions-text"
        instruction_text_4.className = "instructions-text"

        instruction_title.textContent = "Objective of BlackJack"

        instruction_text.textContent =
            "Beat The Dealer. \
            There are some misconceptions about the objective of the game of blackjack but at the simplest level all \
            you are trying to do is beat the dealer. \
            How do you beat the dealer? \
            By drawing a hand value that is higher than the dealer’s hand value \
            By the dealer drawing a hand value that goes over 21. \
            By drawing a hand value of 21 on your first two cards, when the dealer does not. \
            How do you lose to the dealer? \
            Your hand value exceeds 21. \
            The dealer's hand has a greater value than yours at the end of the round"

        instruction_text_2.textContent =
            "Hit Button: Ask for cards"
        instruction_text_3.textContent =
            "Stand Button: Hold your hand"
        instruction_text_4.textContent =
            "Double Button: Double your bet and hit only once"

        returnButton.textContent = "Return"

        this.container.appendChild(instruction_title)
        this.container.appendChild(instruction_text)
        this.container.appendChild(instruction_text_2)
        this.container.appendChild(instruction_text_3)
        this.container.appendChild(instruction_text_4)
        this.container.appendChild(returnButton)

        returnButton.addEventListener("click", () => {
            window.location.reload();
        })
    }
}