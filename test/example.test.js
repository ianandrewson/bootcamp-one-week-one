// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isYes } from '../functions.js';
import { checkAnswer } from '../functions.js';

const test = QUnit.test;

test('checkAnswer should return true if user says yes to question number 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const questionNumber = 1;
    const userAnswer = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = checkAnswer(questionNumber, userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

test('isYes should return true if user input is yes', function(assert) {
    //Arrange
    const userAnswer = 'yes';
    //Act
    const isYesActuallyYes = isYes(userAnswer);
    //Assert
    assert.equal(isYesActuallyYes, true);
});