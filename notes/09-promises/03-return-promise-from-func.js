const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("We got a dog");
  })
  .catch(() => {
    console.log("We did NOT get a dog");
  });
