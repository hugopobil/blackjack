class Game {
    constructor(cards, container) {
        this.container = container
        this.player = new Player(this.container);
        this.dealer = new Dealer(this.container);
        this.cards = new Card (container)
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.x = this.container.offsetWidth
        this.y = this.container.offsetHeight;
    }

    start() {
        this.cards.generateCards('hearts', 5)

    }

}