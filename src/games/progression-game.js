import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const createProgression = (firstElement, progressionLenght, progressionIncrease) => {
  const progressionArr = [];
  let firstNumber = firstElement;
  for (let x = 0; x < progressionLenght; x += 1) {
    progressionArr.push(firstNumber += progressionIncrease);
  }
  return progressionArr;
};

const startRound = () => {
  const progressionLenght = getRandomInt(5, 10);
  const progressionIncrease = getRandomInt(1, 10);
  const firstElement = getRandomInt(1, 99);
  const randomElement = getRandomInt(0, progressionLenght - 1);
  const progressionArray = createProgression(firstElement, progressionLenght, progressionIncrease);
  const correctAnswer = progressionArray[randomElement];
  progressionArray[randomElement] = '..';
  const question = progressionArray.join(' ');
  return [correctAnswer, question];
};

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  runGame(startRound, task);
};

export default progressionGame;
