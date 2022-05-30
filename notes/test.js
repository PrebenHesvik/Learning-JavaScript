import React from 'react'

export const test = () => {
  return (
    <div>test</div>
  )
}
  





const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject({ status: 404 });
      }
      else {
        const pages = {
          '/users': [
            { id: 1, username='Bilbo' },
            { id: 2, username='Esmerelda' }
          ],
          '/about': 'This is the about page'
        };
        const data = pages[url];
        resolve({ status: 200, data });
      }
    }, 2000);
  });
};

fakeRequest('/users')
  .then((res) => {
    console.log('Status code: ', res.status);
    console.log('Data: ', res.data);
    console.log('REQUEST WORKED');
  })
  .catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
  });

  import axios from "axios";
  
axios
  .get('https://swapi.co/api/planets/')
  .then((res) => {
    //We don't have to parse the JSON!
    console.log(res.data);
  })
  .catch((err) => {
    console.log('IN CATCH CALLBACK!!!');
    console.log(err);
  });

axios
  .get('https://swapi.co/api/planetaslkjdaklsjds/') //BAD URL!
  .then((res) => {
    //We don't need to check for a 200 status code, because...
    //Axios will reject the promise for us, unlike fetch!
    console.log(res.data);
  })
  .catch((err) => {
    //In this example with a not-found URL, this callback will run...
    console.log('IN CATCH CALLBACK!!!');
    console.log(err);
  });


  