export function countUniqueClicks(imageObjs) {
  let counter = 0;
  imageObjs.forEach((obj) => obj.isClicked && counter++);
  return counter;
}

export function shuffle(array) {
  let arrLength = array.length,
    temp,
    randomIndex;
  while (arrLength) {
    randomIndex = Math.floor(Math.random() * arrLength--);
    temp = array[arrLength].order;
    array[arrLength].order = array[randomIndex].order;
    array[randomIndex].order = temp;
  }
  return [...array];
}
