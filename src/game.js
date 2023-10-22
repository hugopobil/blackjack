class Game {
    constructor(cards, container) {
        this.container = container
        // this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.dealer = new Dealer(this.container);
        this.cards = cards
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.x = this.container.offsetWidth
        this.y = this.container.offsetHeight;
    }

    start() {

    }

}