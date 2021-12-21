import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const prepareRoundData = () => {
  const randomNumber = getRandomInt(1, 99);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = randomNumber;
  return [correctAnswer, question];
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even. Otherwise answer "no".';
  runGame(prepareRoundData, task);
};
export default evenGame;
