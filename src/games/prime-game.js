import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const isPrime = (randomNum) => {
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
const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');
const prepareRoundData = () => {
  const randomNumber = getRandomInt(1, 99);
  const question = randomNumber;
  return [getCorrectAnswer(randomNumber), question];
};
const primeGame = () => {
  const task = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  runGame(prepareRoundData, task);
};

export default primeGame;
