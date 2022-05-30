# XMLHTTP Requests

```js
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('IT WORKED!!!');
	const data = JSON.parse(this.responseText);
	for (let planet of data.results) {
		console.log(planet.name);
	}
});
firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');
```
<br>

### Nested

```js
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');
```

<br>

# FETCH

```js
fetch('https://swapi.co/api/planetsuy21/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		response.json().then((data) => {
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
```

<br>

### Fetch - chained
```js
fetch('https://swapi.co/api/planets/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('FETCHED ALL PLANETS (first 10)');
		const filmURL = data.results[0].films[0];
		return fetch(filmURL);
	})
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('FETCHED FIRST FILM, based off of first planet');
		console.log(data.title);
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
```

<br>

### Fetch - chained - REFACTORED
```js
const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
```

<BR>

# AXIOS

```js
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
```
<br>

### **Axios - chained** 

```js
import axios from "axios";

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});
```