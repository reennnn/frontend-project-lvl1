import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

const calcGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomInt(1, 99);
    const secondNumber = getRandomInt(1, 99);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomInt(0, operators.length - 1)];
    console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
    const playerAnswer = (readlineSync.question('Your answer: '));
    const getCorrectAnswer = (x, operator, y) => {
      let result;
      switch (operator) {
        case '+':
          result = x + y;
          break;
        case '-':
          result = x - y;
          break;
        case '*':
          result = x * y;
          break;
        default:
          result = null;
          break;
      }
      return result;
    };
    const correctAnswer = getCorrectAnswer(firstNumber, randomOperator, secondNumber);
    if (playerAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
