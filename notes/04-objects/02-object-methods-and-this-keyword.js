// SHORTHAND OBJECT PROPERTIES
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

  return {max, min, sum, avg}
}

const reviews = [4.5, 5.0, 3.4, 2.8, 3.5, 4.0, 3.5]
const stats = getStats(reviews)
const stats2 = getStats2(reviews)
console.log(stats, stats2);


// COMPUTED PROPERTIES
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

const addProp = (obj, k, v) => {return {...obj, [k]:v}}
const res = addProp(newTeam, 'happy', ':)')
console.log(res);

// ADDING METHODS TO OBJECTS
  // just showing that functions can be written in slightly different ways
  // we can't use THIS inside arrow function because THIS will refer to the window
    // and not the object itself. 
const math = {
  multiply: function(x, y) {
    return x * y;
  },
  divide: (x, y) => {return x / y},
  add: (x, y) => x + y,
  square: x => x * x
}

  // Method short hand syntax
const math2 = {
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
}

// `THIS` KEYWORD
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
    const {first ,last, nicName} = this
    return `${first} ${last}`
  }
}

  // THIS: invocation context
const getFullName = personObj2.fullName // will result in an error because now THIS is 
                                        // referencing the window and not the object

const annoyer = {
  phrases: ['literally', 'cray cray', 'totes', 'YOLO'],
  
  pickPhrase() {
    const {phrases} = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },

  start() {
    this.timerID = setInterval(() => {console.log(this.pickPhrase())}, 3000)
  },

  stop() {
    clearInterval(this.timerID);
  }
}

// PUTTING IT ALL TOGETHER
const myDeck = {
  deck: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values : '1,2,3,4,5,6,7,8,9,1,0,J,Q,K,A',
  drawnCards: [],

  initializeDeck() {
    const {suits, values, deck} = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({value:value, suit:suit})
      }
    }
    return deck
  },

  drawCard() {
   const card =  this.deck.pop();
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
    const {deck} = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index befre current element
      let j = Math.floor(Math.random() * (i + 1));
      // swap
      [deck[i], deck[j]] = [deck[j], deck[i]]
    }
  }

  

}

