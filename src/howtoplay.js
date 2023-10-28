class howToPlay {
    constructor(container) {
        this.container = container
        this.width = 150;
        this.height = 100;
        this.x = 10;
        this.y = 10;
    }

    display() {

        const instruction_title = document.createElement("h1")
        instruction_title.id = "instructions-title"
        const instruction_text = document.createElement("p")
        instruction_text.id = "instructions-text"
        const returnButton = document.createElement("button")
        returnButton.id = "instructions-return-button"

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

        returnButton.textContent = "Return"

        this.container.appendChild(instruction_title)
        this.container.appendChild(instruction_text)
        this.container.appendChild(returnButton)

        returnButton.addEventListener("click", () => {
            window.location.reload();
        })
    }
}