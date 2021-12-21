import readlineSync from 'readline-sync';

const runGame = (prepareRoundData, task) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const userName = (readlineSync.question('May I have your name?: '));
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const answerAndQuestion = prepareRoundData();
    const [answer, question] = answerAndQuestion;
    const correctAnswer = answer.toString();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
