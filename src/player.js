class Player {
    constructor(container) {
        this.container = container
        this.cash = 1000 // always start with the same amount of cash
        this.cards = []
        this.setListeners()
    }


    setListeners() {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyF":
                    console.log("Player bets")
                    break;
                default:
                    return;
            }
        });

        // window.addEventListener("keyup", (e) => {
        //     switch (e.code) {
        //         case "KeyF":
        //             break;
        //         default:
        //             return;
        //     }
        // });
    }

    // Metodos del jugador

}