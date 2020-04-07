import { shuffledField } from './PageInit.js';

export default function checkWin() {
  const currentDOM = document.querySelectorAll('.container__item');
  const currentArray = [];

  currentDOM.forEach((element) => {
    currentArray.push(element.innerHTML);
  });

  currentArray.forEach((element) => {
    shuffledField.forEach((sourceElement) => {
      if (element === sourceElement) {
        console.log('You WIN!');
      }
    });
  });

  return currentArray;
}
