import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const createProgression = (progressionLenght, progressionIncrease) => {
  const progressionArr = [];
  let firstElement = getRandomInt(1, 10);
  for (let x = 0; x < progressionLenght; x += 1) {
    progressionArr.push(firstElement += progressionIncrease);
  }
  return progressionArr;
};

const startRound = () => {
  const progressionLenght = getRandomInt(5, 10);
  const progressionIncrease = getRandomInt(1, 10);
  const randomElement = getRandomInt(0, progressionLenght - 1);
  const progressionArray = createProgression(progressionLenght, progressionIncrease);
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
