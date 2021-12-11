import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

const progressionGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const createProgression = (progressionLenght, progressionIncrease) => {
      const progressionArr = [];
      let firstElement = getRandomInt(1, 10);
      for (let x = 0; x < progressionLenght; x += 1) {
        progressionArr.push(firstElement += progressionIncrease);
      }
      return progressionArr;
    };
    const progressionLenght = getRandomInt(5, 10);
    const progressionIncrease = getRandomInt(1, 10);
    const progression = createProgression(progressionLenght, progressionIncrease);
    const randomElement = getRandomInt(0, progression.length - 1);
    const correctAnswer = progression[randomElement];
    progression[randomElement] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
