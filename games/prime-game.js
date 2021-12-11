import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

const primeGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomInt(1, 99);
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const checkForPrime = (randomNum) => {
      if (randomNumber < 2) {
        return false;
      }
      for (let x = 2; x <= randomNum / 2; x += 1) {
        if (randomNum % x === 0) {
          return false;
        }
      }
      return true;
    };
    const getCorrectAnswer = (number) => (checkForPrime(number) ? 'yes' : 'no');
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default primeGame;
