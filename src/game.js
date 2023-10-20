/*
Aqui creamos la clase del juego del BlackJack
Esta clase va a controlar el juego entero,

 */

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

        const startMessage = document.createElement("div")
        const howtoplayMessage = document.createElement("div")

        startMessage.className = "new-game-start"
        startMessage.textContent = "NEW GAME"
        startMessage.style.position = "absolute"
        startMessage.style.width = `300px`;
        startMessage.style.height = `300px`;
        startMessage.style.color = "white"
        startMessage.style.fontSize = "30px"
        startMessage.style.left = `100px`;
        startMessage.style.top = `100px`;

        howtoplayMessage.className = "how-to-play"
        howtoplayMessage.textContent = "HOW TO PLAY"
        howtoplayMessage.style.position = "absolute"
        howtoplayMessage.style.width = `300px`;
        howtoplayMessage.style.height = `300px`;
        howtoplayMessage.style.color = "white"
        howtoplayMessage.style.fontSize = "30px"
        howtoplayMessage.style.left = `100px`;
        howtoplayMessage.style.top = `200px`;

        this.container.appendChild(howtoplayMessage)
        this.container.appendChild(startMessage)


        // const backgroundMusic = document.getElementById('background-music');
        // backgroundMusic.play()

       // setInterval(() => {
       //     backgroundMusic.play()
       // }, 60000 * 3)
    }



}