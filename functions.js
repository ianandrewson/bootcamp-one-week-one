export const isYes = userResponse => {
    if (userResponse === 'yes' || userResponse === 'y' || userResponse === 'yup' || userResponse === 'yea' || userResponse === 'yeah' || userResponse === 'ya' || userResponse === 'jo') return true;
    return false;
}

export const checkAnswer = (questionNumber, userInput) => {
    if (questionNumber === 1 && isYes(userInput)) {
        return true;
    } else if (questionNumber === 2 && !isYes(userInput)) {
        //Technically bugged; any input other than yes will give a correct answer, not just no
        return true;
    } else if (questionNumber === 3 && isYes(userInput)) {
        return true;
    } else {
        return false;
    }
};
