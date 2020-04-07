export default function startTimer() {
  const buttonStart = document.getElementById('start');
  const buttonStop = document.getElementById('end');
  let seconds = 0;

  const timer = () => {
    const timerElement = document.querySelector('.controls__timer');

    const timerID = setInterval(() => {
      seconds += 1;
      timerElement.innerHTML = seconds;
    }, 1000);

    buttonStop.addEventListener('click', () => {
      clearTimeout(timerID);
    });
  };

  buttonStart.addEventListener('click', () => {
    timer();
  });
}
