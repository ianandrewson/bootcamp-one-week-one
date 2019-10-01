export const checkAnswer = (questionNumber, userInput) => {
    if (questionNumber === 1 && userInput === 'yes') {
        return true;
    } else if (questionNumber === 2 && userInput === '') {
        return true;
    } else if (questionNumber === 3 && userInput === '') {
        return true;
    } else {
        return false;
    }
};

export const isYes = userResponse => {
    if (userResponse === 'yes') return true;
    return false;
}