const luckQuotes = [
  "Luck is a dividend of sweat. The more you sweat, the luckier you get. - Ray Kroc",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "The only good luck many great men ever had was being born with the ability and determination to overcome bad luck. - Channing Pollock",
  "Luck is what happens when preparation meets opportunity. - Seneca",
  "The only thing that overcomes hard luck is hard work. - Harry Golden",
  "Luck is a matter of preparation meeting opportunity. - Oprah Winfrey",
  "I believe in luck: how else can you explain the success of those you dislike? - Jean Cocteau",
  "Good luck is another name for tenacity of purpose. - Ralph Waldo Emerson",
  "Shallow men believe in luck. Strong men believe in cause and effect. - Ralph Waldo Emerson",
  "The only sure thing about luck is that it will change. - Bret Harte",
];

class Quote {
    constructor() {
    }

    generate() {
        let index = Math.floor(Math.random() * (luckQuotes.length + 1))
        return luckQuotes[index]
    }

}
