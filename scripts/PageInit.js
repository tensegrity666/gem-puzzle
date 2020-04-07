let timer = '00:00';
const FIELD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const BUTTONS = ['start game', 'end game', 'pause', 'results'];

function createFragmentItems() {
  const fragmentItems = document.createDocumentFragment();

  FIELD.forEach((element) => {
    const item = document.createElement('div');

    item.classList.add('container__item');
    item.innerHTML = FIELD.indexOf(element);

    if (FIELD.indexOf(element) === 0) {
      item.classList.add('container__item_empty');
    }

    fragmentItems.append(item);
  });

  return fragmentItems;
}

function createFragmentButtons() {
  const fragmentButtons = document.createDocumentFragment();

  BUTTONS.forEach((element) => {
    const button = document.createElement('button');

    button.classList.add('controls__button');
    button.innerHTML = element;

    fragmentButtons.append(button);
  });

  return fragmentButtons;
}

export default function pageInit() {
  const page = document.querySelector('body');

  const container = document.createElement('div');
  page.append(container);
  container.classList.add('container');

  const controls = document.createElement('div');
  page.append(controls);
  controls.classList.add('controls');

  container.append(createFragmentItems());
  controls.append(createFragmentButtons());

  const timerElement = document.createElement('span');
  controls.append(timerElement);
  timerElement.classList.add('controls__timer');
  timerElement.innerHTML = `${timer}`;
}
