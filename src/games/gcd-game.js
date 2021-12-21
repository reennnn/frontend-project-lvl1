import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const getGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getGcd(secondNum, firstNum % secondNum);
};

const prepareRoundData = () => {
  const firstNum = getRandomInt(1, 99);
  const secondNum = getRandomInt(1, 99);
  const question = `${firstNum} ${secondNum}`;
  return [getGcd(firstNum, secondNum), question];
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  runGame(prepareRoundData, task);
};
export default gcdGame;
