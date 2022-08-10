function generateNewPhrase(mood) {
    switch (mood) {
        case "happy":

            return happyPhrases[generateRandomIndex(0, happyPhrases.length)];
        case "sad":
            return sadPhrases[randomNumber];
        case "angry":
            return angryPhrases[randomNumber];
    }
}

function generateRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const happyPhrases = {
    "1": "To infinite and beyond 🚀",
    "2": "You are amazing!",
    "3": "How's the day? ☀",
    "4": "HURRAAAAYY",
    "5": "noice",
    "6": "You are the best!",
    "7": "You are doing great.",
    "8": "Chad detected ✅",
}

module.exports = generateNewPhrase;