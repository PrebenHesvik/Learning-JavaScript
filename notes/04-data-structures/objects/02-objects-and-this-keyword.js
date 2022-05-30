//////////   'THIS' KEYWORD  //////////
// referencing THIS inside a function will refer to the window object
// referencing THIS inside an object will refer to the object itself
// Using THIS in methods
const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nicName: "Cher",

  fullName() {
    return `${this.first} ${this.last}`;
  },
};

const person2 = {
  first: "Cherilyn",
  last: "Sarkisian",
  nicName: "Cher",

  fullName() {
    const { first, last, nicName } = this;
    return `${first} ${last} calls herself ${nicName}`;
  },
};

// THIS: invocation context
//    will result in an error because now THIS is
//    referencing the window and not the object
const getFullName = personObj2.fullName;

const annoyer = {
  phrases: ["literally", "cray cray", "totes", "YOLO"],

  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },

  start() {
    this.timerID = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },

  stop() {
    clearInterval(this.timerID);
  },
};

//////////   RESTAURANT EXAMPLE  //////////
let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,

  checkAvailability: function (partySize) {
    if (this.guestCount + partySize <= this.guestCapacity) {
      return true;
    } else {
      return false;
    }
  },

  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },

  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.guestCount);

let status = restaurant.checkAvailability(4);
console.log(status);
