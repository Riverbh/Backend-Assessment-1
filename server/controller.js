let dataBase = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["Someone is looking up to you. Don't let that person down.", "run.", "No snowflake in an avalanche ever feels responsible.", "About time I got out of that array.", "I can't help you, for I am just a button"]

        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]

        res.status(200).send(randomFortune)
    },

    getMotivation: (req, res) => {
        const motivation = ["You can do whatever you set your mind too", "You've got this", "Keep going until you reach your end goal."]
   
        let randomIndex = Math.floor(Math.random() * motivation.length)
        let randomMotivation = motivation[randomIndex]

        res.status(200).send(randomMotivation)
    },

    postInspiration: ((req, res) => {
        dataBase.push(req.body)
        res.status(200).send(dataBase)
    }),

    deleteName: ((req,res) => {
        dataBase.pop(req.body)
        res.status(200).send(dataBase)
    })
    


}