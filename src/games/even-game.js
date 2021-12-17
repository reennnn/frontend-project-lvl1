import { getRandomInt, runGame } from '../index.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const round = () => {
  const randomNumber = getRandomInt(1, 99);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = `Question: ${randomNumber}`;
  return [correctAnswer, question];
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even. Otherwise answer "no".';
  runGame(round, task);
};
export default evenGame;
