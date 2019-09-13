export const draw = (deck, level, boss) => {
  let index;
  if (boss === false) {
    index = deck.findIndex(card => card.level === level && card.enemyType !== 4);
  } else if (boss === true) {
    index = deck.findIndex(card => card.enemyType === 4);
  } else {
    index = deck.findIndex(card => card.level === level);
  }
  const [card] = deck.splice(index, 1);
  return { card, deck };
};

export const shuffle = (deck) => {
  const newArray = deck.slice();
  let currentIndex = newArray.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
};
