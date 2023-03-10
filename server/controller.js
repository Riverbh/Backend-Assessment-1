module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["Someone is looking up to you. Don't let that person down.", "run.", "No snowflake in an avalanche ever feels responsible.", "About time I got out of that array.", "I can help you, for I am just a button"]

        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]

        res.status(200).send(randomFortune)
    }

}