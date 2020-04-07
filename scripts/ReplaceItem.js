export default function replaceItem() {
  const items = document.querySelectorAll('.container__item');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      console.log(event.target);
    });
  });
}
