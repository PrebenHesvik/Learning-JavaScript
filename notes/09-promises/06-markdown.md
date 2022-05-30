### Call Stack
- The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
- How JS "knows" what function is currently being run and what functions are called fro within that function, etc.

### How it works

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run when their calls are reached. 
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing. 

#### Promises
- A Promise is an object representing the eventual completion or failure of an asyncronous operation. 
- It is a returned object to which you attach callbacks, instead of passing callbacks into a function.
- These two callbacks are most often called `resolve` and `reject`.
- Until a promise is either resolved or reject is has a status of `pending`.

```js
// we always call new Promise to set up a new promise
const willGetYouADog = new Promise((resolve, reject) => {
    // Both resolve and reject are callback functions.
    // Before we call resolve or reject, the promise is PENDING 
    const rand = Math.random();
    if (rand < 0.5) {
        resolve();
    }
    else {
        reject()
    }
});

willGetYouADog
   .then(() => {
    console.log("Resolved - We got a dog");
  })
  .catch(() => {
    console.log("Rejected - We did NOT get a dog");
  });
```

<br>

##### **Returning a promise from a function**

```js


```

<br>

#### **Resolving/Rejecting with values**

```js
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
```
<br>
#### Promise chaining

```js
//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('OH NO!', err);
	});

```


