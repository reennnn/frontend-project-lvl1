import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = (readlineSync.question('May I have your name?: '));

const getRandomInt = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

export default getRandomInt;
