const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 2, username: "Esmerelda" },
        ],
        "/about": "This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 2000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status code: ", res.status);
    console.log("Data: ", res.data);
    console.log("REQUEST WORKED");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });

// Result ==>
//  Status code:  200
//  Data:  This is the about page
//  REQUEST WORKED
