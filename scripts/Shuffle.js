// shuffles an array of initial values of the playing field

export default function shuffle(array) {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
}
