
import { isYes } from './functions.js';
import { checkAnswer } from './functions.js';


const myButton = document.getElementById('action-button');


myButton.onclick = () => {
    // alert('welcome to my quiz!');
    // const myConfirmation = confirm('Do you want to take my quiz?');
    // console.log(myConfirmation);
    const question1 = prompt('What is my favorite color?').toLowerCase().trim();
    if (checkAnswer(1, question1)) {
        alert('Correct!');
    } else {
        alert('Wrong');
    }
};