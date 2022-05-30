// =============== CALLBACKS ===============
//  Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
//  The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
//  Once the browser finishes those tasks, they return and are pushed onto the stack (callback queue) as a callback.

// Example 1:
console.log("I printfirst");
setTimeout(function () {
  console.log("I print after 2 secnds");
}, 2000);
console.log("I print second");

// Example 2:
// Callback chaining can quickly become a bit messy
// move a button x px right if there is still enough space on the screen
const btn = document.querySelector("button");
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};
moveX(
  btn,
  100,
  1000,
  () => {
    moveX(
      btn,
      100,
      1000,
      () => {
        moveX(
          btn,
          100,
          1000,
          () => {
            console.log("even more screen left");
          },
          () => {
            alert("cannot move further");
          }
        );
      },
      () => {
        alert("cannot move further");
      }
    );
  },
  () => {
    alert("cannot move further");
  }
);
