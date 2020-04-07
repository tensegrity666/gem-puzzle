import { pageInit } from './PageInit.js';
import startTimer from './Timer.js';
import checkWin from './CheckWin.js';
import replaceItem from './ReplaceItem.js';

window.addEventListener('DOMContentLoaded', () => {
  pageInit();
  startTimer();
  checkWin();
  replaceItem();
});
