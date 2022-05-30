let myError = new Error("there is an error");
// myError has three properties:
//      myError.name
//      myError.message
//      myError.stack
throw new Error(); // throw stops the execution of the program

// =============== TRY/CATCH FOR SYNCHRONOUS CODE ===============
function fail() {
  try {
    throw myError;
  } catch (error) {
    console.log("mistake found", error);
  } finally {
    console.log("Finally says: 'I get to run no matter what'");
  }
}

fail();

// =============== TRY/CATCH WON'T CATCH THIS ASYNCHRONOUS CODE ===============
try {
  setTimeout(function () {
    fakevariable;
  }, 1000);
} catch (error) {
  console.log("got it", error);
}

// =============== ERROR HANDLING FOR ASYNCHRONOUS CODE ===============
Promise.resolve("asyncfail")
  .then((response) => {
    throw new Error("#1 fails");
    return response;
  })
  .catch((err) => {
    console.log(err);
  });

// =============== ERROR HANDLING FOR ASYNCHRONOUS CODE WITH ASYNC AWAIT ===============
(async function () {
  try {
    await Promise.reject("Error happened");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("still running");
  }
})();

// =============== EXTENDING ERRORS ===============
class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
  }
}

throw new AuthenticationError("Authentication failed");
