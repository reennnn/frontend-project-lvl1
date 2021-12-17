import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const checkForEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const getCorrectAnswer = (number) => (checkForEven(number) ? 'yes' : 'no');
const startRound = () => {
  const randomNumber = getRandomInt(1, 99);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = `Question: ${randomNumber}`;
  return [correctAnswer, question];
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even. Otherwise answer "no".';
  runGame(startRound, task);
};
export default evenGame;
