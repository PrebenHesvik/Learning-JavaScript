//////////   PUTTING IT ALL TOGETHER  //////////
const myDeck = {
  deck: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,1,0,J,Q,K,A",
  drawnCards: [],

  initializeDeck() {
    // destructuring
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        // push will add the object at the end of the list
        deck.push({ value: value, suit: suit });
        // the code below works the same way
        // deck.push({ value, suit })
      }
    }
    return deck;
  },

  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },

  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },

  shuffle() {
    const { deck } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      // swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

//////////   DOING THE ABOVE WITHOUT USING AN OBJECT  //////////
function initializeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for (let value of values.split(", ")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    // pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    // swap
    [deck[i], (deck[j] = deck[j]), deck[i]];
  }
}

// This method quickly becomes unmanagable if we were to use
// different decks of cards
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultiple(5, firstDeck, drawnCards);
const hand2 = drawMultiple(5, firstDeck, drawnCards);
