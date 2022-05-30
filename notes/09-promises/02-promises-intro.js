// =============== CALL STACK ===============
//  The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
//  How JS "knows" what function is currently being run and what functions are called fro within that function, etc.

// =============== HOW IT WORKS ===============
// When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// Any functions that are called by that function are added to the call stack further up, and run when their calls are reached.
// When the current function is finished, the interpreter takes it off the stack and resumes execution where
//   it left off in the last code listing.

// =============== PROMISES===============
// A Promise is an object representing the eventual completion or failure of an asyncronous operation.
// It is a returned object to which you attach callbacks, instead of passing callbacks into a function.
// These two callbacks are most often called `resolve` and `reject`.
// Until a promise is either resolved or reject is has a status of `pending`.

// we always call new Promise to set up a new promise
const willGetYouADog = new Promise((resolve, reject) => {
  // Both resolve and reject are callback functions.
  // Before we call resolve or reject, the promise is PENDING
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

willGetYouADog
  .then(() => {
    console.log("Resolved - We got a dog");
  })
  .catch(() => {
    console.log("Rejected - We did NOT get a dog");
  });
