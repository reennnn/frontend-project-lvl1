import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomInt = (min, max) => {
    const minNumber = Math.ceil(min);
    const maxNumber = Math.floor(max);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  };
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomInt(1, 20);
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === 'yes') {
      if (randomNumber % 2 === 0) {
        console.log('Correct!');
      } else {
        console.log(`${playerAnswer} is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (playerAnswer === 'no') {
      if (randomNumber % 2 !== 0) {
        console.log('Correct!');
      } else {
        console.log(`${playerAnswer} is wrong answer;(. Correct answer was "yes".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
