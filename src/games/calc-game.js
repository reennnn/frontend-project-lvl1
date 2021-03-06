import getRandomInt from '../additional-functions.js';
import runGame from '../index.js';

const getCorrectAnswer = (x, operator, y) => {
  let result;
  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const prepareRoundData = () => {
  const firstNumber = getRandomInt(1, 99);
  const secondNumber = getRandomInt(1, 99);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = getCorrectAnswer(firstNumber, randomOperator, secondNumber);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  return [correctAnswer, question];
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  runGame(prepareRoundData, task);
};

export default calcGame;
