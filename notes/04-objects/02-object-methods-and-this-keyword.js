//////////   SHORTHAND OBJECT PROPERTIES  //////////
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg
  }
}

// with the short hand syntax we can write the return statement like this:
const getStats2 = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return { max, min, sum, avg }
}

const reviews = [4.5, 5.0, 3.4, 2.8, 3.5, 4.0, 3.5]
const stats = getStats(reviews)
const stats2 = getStats2(reviews)
console.log(stats, stats2);



//////////   COMPUTED PROPERTIES  //////////
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// Old way of doing it
const team = {};
team[role] = person;
team[role2] = person2;
console.log(team);

// New way of doing it
const newTeam = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}
console.log(newTeam);


// A function that adds a new property
function addProp(obj, k, v) {
  const copy = { ...obj };
  copy[k] = v;
  return copy
}

const result = addProp(newTeam, 'hobby', 'programming')
console.log(result);

// A shorter way of writing the same thing
const addProp2 = (obj, k, v) => { return { ...obj, [k]: v } }
const res = addProp2(newTeam, 'happy', ':)')
console.log(res);


//////////   ADDING METHODS TO OBJECTS  //////////
// just showing that functions can be written in slightly different ways
// we can't use THIS inside arrow function because THIS will refer to the window
// and not the object itself. 
const math = {
  multiply: function (x, y) {
    return x * y;
  },
  divide: (x, y) => { return x / y },
  add: (x, y) => x + y,
  square: x => x * x
}

console.log('math (multiply): ', math.multiply(5, 10));
console.log('math (add): ', math.add(5, 10));


// Method short hand syntax where we don't 
// store the function within a key name
const math2 = {
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
}

console.log('math2 (multiply): ', math2.multiply(5, 10));
console.log('math2 (divide): ', math2.divide(5, 10));


//////////   'THIS' KEYWORD  //////////
// referencing THIS inside a function will refer to the window object
// referencing THIS inside an object will refer to the object itself
// Using THIS in methods
const personObj = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nicName: 'Cher',

  fullName() {
    return `${this.first} ${this.last}`
  }
}

const personObj2 = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nicName: 'Cher',

  fullName() {
    const { first, last, nicName } = this
    return `${first} ${last} calls herself ${nicName}`
  }
}

// THIS: invocation context
//    will result in an error because now THIS is 
//    referencing the window and not the object
const getFullName = personObj2.fullName


const annoyer = {
  phrases: ['literally', 'cray cray', 'totes', 'YOLO'],

  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },

  start() {
    this.timerID = setInterval(() => { console.log(this.pickPhrase()) }, 3000)
  },

  stop() {
    clearInterval(this.timerID);
  }
}



//////////   PUTTING IT ALL TOGETHER  //////////
const myDeck = {
  deck: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,1,0,J,Q,K,A',
  drawnCards: [],

  initializeDeck() {
    // destructuring
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        // push will add the object at the end of the list
        deck.push({ value: value, suit: suit })
        // the code below works the same way
        // deck.push({ value, suit })
      }
    }
    return deck
  },

  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card
  },

  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards
  },

  shuffle() {
    const { deck } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      // swap
      [deck[i], deck[j]] = [deck[j], deck[i]]
    }
  }
}

myDeck.initializeDeck()
myDeck.shuffle()
const h1 = myDeck.drawMultiple(2)
const h2 = myDeck.drawMultiple(2)
const h3 = myDeck.drawMultiple(5)



//////////   DOING THE ABOVE WITHOUT USING AN OBJECT  //////////
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(', ')) {
    for (let suit of suits) {
      deck.push({ value, suit })
    }
  }
  return deck
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = []
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
    [deck[i], deck[j] = deck[j], deck[i]];
  }
}

// This method quickly becomes unmanagable if we were to use
// different decks of cards
const firstDeck = initializeDeck();
const drawnCards = []
shuffle(firstDeck)
const hand1 = drawMultiple(5, firstDeck, drawnCards)
const hand2 = drawMultiple(5, firstDeck, drawnCards)