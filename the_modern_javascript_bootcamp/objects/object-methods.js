let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,

  checkAvailability: function(partySize) {
    if (this.guestCount + partySize <= this.guestCapacity) {
      return true;
    } else {
      return false;
    }
  },

  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },

  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

restaurant.seatParty(72);
console.log(restaurant.guestCount);

let status = restaurant.checkAvailability(4);
console.log(status);
