import { getRandomInt, runGame } from '../src/index.js';

const checkForPrime = (randomNum) => {
  if (randomNum < 2) {
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
const round = () => {
  const randomNumber = getRandomInt(1, 99);
  const question = `Question: ${randomNumber}`;
  return [getCorrectAnswer(randomNumber), question];
};
const primeGame = () => {
  const task = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  runGame(round, task);
};

export default primeGame;
