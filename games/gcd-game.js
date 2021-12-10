import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

const gcdGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomInt(1, 99);
    const secondNumber = getRandomInt(1, 99);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const playerAnswer = (readlineSync.question('Your answer: '));
    const getCorrectAnswer = (firstNum, secondNum) => {
      if (!secondNum) {
        return firstNum;
      }
      return getCorrectAnswer(secondNum, firstNum % secondNum);
    };
    const correctAnswer = getCorrectAnswer(firstNumber, secondNumber).toString();
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gcdGame;
