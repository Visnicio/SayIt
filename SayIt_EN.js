function generateNewPhrase(mood) {
    var randomNumber = Math.floor(Math.random() * 5 + 1);

    switch (mood) {
        case "happy":
            return happyPhrases[randomNumber];
        case "sad":
            return sadPhrases[randomNumber];
        case "angry":
            return angryPhrases[randomNumber];
    }
}

const happyPhrases = {
    "1": "Dados orbitando a terra 🚀",
    "2": "Você é incrível!",
    "3": "Como esta o dia hoje? ☀",
    "4": "IIIIIRRRÁÁÁ 🤠",
    "5": "Gostei de ver"
}

module.exports = generateNewPhrase;