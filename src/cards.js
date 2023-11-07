class Card {
    constructor(container, suit, rank, top, left) {
        this.container = container;
        this.suit = suit;
        this.rank = rank;
        this.top = top;
        this.left = left;
    }

    generateCards() {

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.top = this.top;
        card.style.left = this.left;
        card.style.width = "180px"
        card.style.height = "250px"

        const placeholder = document.createElement('div')
        placeholder.classList.add('placeholder')

        const suitImage = document.createElement('img');
        suitImage.classList.add('suit');
        suitImage.src = `./../img/${this.suit}.png`;

        const suitImageSmall = document.createElement('img');
        suitImageSmall.classList.add('suit-small');
        suitImageSmall.src = `./../img/${this.suit}.png`;

        const rankTextTop = document.createElement('div');
        rankTextTop.classList.add('rank');
        const topNumber = document.createElement('div');
        topNumber.textContent = this.rank;
        rankTextTop.appendChild(topNumber)

        const rankTextBottom = document.createElement('div');
        rankTextBottom.classList.add('rank');
        rankTextBottom.classList.add('bottom-right');
        const bottomNumber = document.createElement('div');
        bottomNumber.textContent = this.rank;
        rankTextBottom.appendChild(bottomNumber)

        if (this.suit === "hearts" || this.suit === "diamonds") {
            topNumber.style.color = "red"
            bottomNumber.style.color = "red"
        }

        if (this.suit === "spades" || this.suit === "clubs") {
            topNumber.style.color = "black"
            bottomNumber.style.color = "black"
        }

        rankTextTop.appendChild(suitImageSmall.cloneNode());
        rankTextBottom.appendChild(suitImageSmall);
        card.appendChild(placeholder);
        placeholder.appendChild(suitImage);
        placeholder.appendChild(rankTextTop);
        placeholder.appendChild(rankTextBottom);

        this.container.appendChild(card);
    }


}
