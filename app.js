
import { isYes } from './functions.js';
import { checkAnswer } from './functions.js';

const myButton = document.getElementById('action-button');
const answerField = document.getElementById('answer-field');

myButton.onclick = () => {
    alert('Welcome to my quiz!');
    let score = 0;
    const userName = prompt('What is your name?').trim();
    const myConfirmation = confirm(`Would you like to take my quiz, ${userName}?`);
    const question1Ans = prompt('Do I love surfing after breaking my face?').toLowerCase().trim();
    if (checkAnswer(1, question1Ans)) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong');
    }

    const question2Ans = prompt(`Hey ${userName}, did I live in Copenhagen?`).toLowerCase().trim();
    if (checkAnswer(2, question2Ans)) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong');
    }

    const question3Ans = prompt('Do I love synthesizers?').toLowerCase().trim();
    if (checkAnswer(3, question3Ans)) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong');
    }

    alert(`You have finished the quiz, ${userName}! The results will now be displayed.`)

    answerField.textContent = `You got ${score} correct.`
};