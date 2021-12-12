import readlineSync from 'readline-sync';
import userName from './cli.js';

export const getRandomInt = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

export const runGame = (round, task) => {
  const numberOfRounds = 3;
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const answerAndQuestion = round();
    const correctAnswer = answerAndQuestion[0];
    const question = answerAndQuestion[1];
    console.log(question);
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
