import { getRandomInt, runGame } from '../index.js';

const getCorrectAnswer = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getCorrectAnswer(secondNum, firstNum % secondNum);
};

const round = () => {
  const firstNum = getRandomInt(1, 99);
  const secondNum = getRandomInt(1, 99);
  const question = `Question: ${firstNum} ${secondNum}`;
  return [getCorrectAnswer(firstNum, secondNum), question];
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  runGame(round, task);
};
export default gcdGame;
