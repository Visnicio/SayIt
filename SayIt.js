function generateNewPhrase(mood) {
    switch (mood) {
        case "happy":
            return happyPhrases[generateRandomIndex(1, happyPhrases.length)];
        case "sad":
            return sadPhrases[generateRandomIndex(0, sadPhrases.length)];
        case "angry":
            return angryPhrases[randomNumber];
    }
}

function generateRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const happyPhrases = [
    "To infinite and beyond 🚀",
    "You are amazing!",
    "How's the day? ☀",
    "HURRAAAAYY",
    "noice",
    "You are the best!",
    "You are doing great.",
    "Chad detected ✅",
]

const sadPhrases = [
    "Not this time Big Boy :(",
    "That didn't work quite well",
    "Don't worry, nex time wil be different... I hope",
    "Don't stress youself, we are just living beings in a gigantic floating rock"
]

module.exports = generateNewPhrase;