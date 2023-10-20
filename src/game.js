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
        const exitMessage = document.createElement("div")
        const creatorMessage = document.createElement("div")

        function create_div_start_menu(element, class_name, name, position, index) {
            element.className = class_name;
            element.textContent = name;
            element.style.position = position;
            element.style.width = `300px`;
            element.style.height = `300px`;
            element.style.color = "white";
            element.style.fontSize = "30px";
            element.style.left = `100px`;
            element.style.top = `${index*100}px`;
        }

        create_div_start_menu(startMessage, "new-game-start", "NEW GAME", "absolute", 1)
        create_div_start_menu(howtoplayMessage, "how-to-play", "HOW TO PLAY", "absolute", 2)
        create_div_start_menu(exitMessage, "settings", "EXIT", "absolute", 3)

        creatorMessage.className = "creators-div"
        creatorMessage.textContent = "Created by Paula & Hugo"
        creatorMessage.style.position = "absolute"
        creatorMessage.style.fontSize = "10px";
        creatorMessage.style.left = `420px`;
        creatorMessage.style.top = `670px`;
        creatorMessage.style.color = `white`;



        this.container.appendChild(howtoplayMessage)
        this.container.appendChild(startMessage)
        this.container.appendChild(exitMessage)
        this.container.appendChild(creatorMessage)


        // const backgroundMusic = document.getElementById('background-music');
        // backgroundMusic.play()

       // setInterval(() => {
       //     backgroundMusic.play()
       // }, 60000 * 3)
    }



}