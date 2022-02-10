// OBJECTS
// objects are collections of properties
// properties are a key value pair
// rather than accessing data using an index, we use custom keys
// all property keys inside an object are stored as strings

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
}

// Acessing data inside an object
let totalMiles = fitBitData.totalMiles
let totalSteps = fitBitData['totalSteps']

// updating existing properties
fitBitData.workoutsThisWeek = '6 of 7'
fitBitData.totalMiles += 7.5

// adding a new property
fitBitData['heartStillBeating'] = true
fitBitData.musclesSore = false

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
}

const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88,
  }
}

const shoppingCart = [
  {
    product: 'Milk',
    price: 10.99,
    quantity: 2,
  },
  {
    product: 'Bread',
    price: 4.25,
    quantity: 1,
  },
  {
    product: 'Cheese',
    price: 6.50,
    quantity: 2,
  },
]

const user = {
  username: 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notifications: [],
}

// Comparing arrays
let arr = [1, 2, 3]
let arr2 = [1, 2, 3]

console.log(`arr === arr2? ${arr === arr2}`);
console.log(`arr == arr2? ${arr == arr2}`);
      // we get false because the arrays are stored in different places in memory
      // JavaScript works differently than Python when it comes to comparing arrays