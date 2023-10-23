class Card {
    constructor(container) {
        this.container = container;
    }

    generateCards(suit, rank) {

        const card = document.createElement('div');
        card.classList.add('card');

        const placeholder = document.createElement('div')
        placeholder.classList.add('placeholder')


        const suitImage = document.createElement('img');
        suitImage.classList.add('suit');
        suitImage.src = `./img/${suit}.png`;

        const suitImageSmall = document.createElement('img');
        suitImageSmall.classList.add('suit-small');
        suitImageSmall.src = `./img/${suit}.png`;

        const rankTextTop = document.createElement('div');
        rankTextTop.classList.add('rank');
        rankTextTop.textContent = rank

        const rankTextBottom = document.createElement('div');
        rankTextBottom.classList.add('rank');
        rankTextBottom.classList.add('bottom-right');
        const rankText = document.createElement('div');
        rankText.classList.add('number')
        rankText.textContent = rank;
        rankTextBottom.appendChild(rankText)

        if (suit === "hearts" || suit === "diamonds") {
            rankTextTop.style.color = "red"
            rankTextBottom.style.color = "red"
        }

        if (suit === "spades" || suit === "clubs") {
            rankTextTop.style.color = "black"
            rankTextBottom.style.color = "black"
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
