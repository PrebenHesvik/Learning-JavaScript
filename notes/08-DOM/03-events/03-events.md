# addEventListener()

## Example 1

```js
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    alert('CLICKED')
})
```

## Example 2

```js
windows.addEventListener('scroll', function () {
    alert('YOU ARE NOW SCROLLING')
})
```

## Example 3

### **HTML**
```html
<body>
  <input id="#input-box"></input>
</body>
```

```js
const inputBox = document.querySelector('#input-box');
inputBox.addEventListener('keypress', function(e) {
    // check if user pressed 'Enter' key
    if(e.key === 'Enter) {
        // return early if the input box does not
        // contain a value
        if (!this.value) return;
        console.log('user pressed Enter key')
    }
})
```

## Methods available

- click
- mouseover
- mouseout
- scroll
- keydown
  - fires when we press a key
- keyup
  - fires when we release the key
- keypress
  - fires when a character key is pressed (a-zA-Z + a few others)


<br><br>

# Events on multiple elements

### **HTML**
```html
<body>
  <section id="boxes"></section>
  <script src="app.js"></script>
</body>
```

### **CSS**
```css
#boxes {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 200px;
    height: 200px;
}
```

### **JavaScript**

<br>

#### **Method 1**
```js
const printColor = function(box) {
    console.log(box.style.backgroundColor);
}

const colors = ['red', 'orange', 'blue']

const container = document.querySelector('#boxes')

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', function() {
        printColor(box);
    });
}
```

<br>

#### **Method 2** - Use `this` keyword
```js
const printColor = function() {
    // this function is an event handler
    console.log(this.style.backgroundColor);
}

const colors = ['red', 'orange', 'blue']

const container = document.querySelector('#boxes')

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', printColor);
}
```

<br><br>

# The Event Object

```js
const printColor = function(event) {
    // this function is an event handler
    // 'event' is the event object
    console.log(this.style.backgroundColor);
}

const colors = ['red', 'orange', 'blue']

const container = document.querySelector('#boxes')

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    // The event object is passed automatically
    // and we can access it in the printColor 
    // function
    box.addEventListener('click', printColor);
}
```

<br></br>

# Form Events & PreventDefault

### **HTML**
```html
<body>
    <form id="signup-form">
        <input name="creditCard" type="text" placeholder="credit-card", id="cc">
        <label for="">Check this checkbox
            <input name="agreeToTerms type="checkbox" name="" id="terms">
        </label>
        <select name="selectedOption" id="options">
            <option value="Option 1">Opton 1</option>
            <option value="Option 2">Opton 2</option>
            <option value="Option 3">Opton 2</option>
        </select>
        <input type="submit" value="">
    </form>
</body>
```

### **JavaScript**
```js
const form = document.querySelector('#signup-form')
const creditCardInput = document.querySelector('#cc')
const termsCheckbox = const.document.querySelector('#terms')
const optionsSelect = const.document.querySelector('#options')

form.addEventListener('submit', function(e) {
    alert('Form Submitted');
    console.log('cc', creditCardInput.value)
    console.log('terms', termsCheckbox.checked)
    console.log('options', optionsSelect.value)
    e.preventDefault();
})

```

<br></br>

# Input & Change Events

### **HTML**
```html
<body>
    <form id="signup-form">
        <input name="creditCard" type="text" placeholder="credit-card", id="cc">
        <label for="">Check this checkbox
            <input name="agreeToTerms type="checkbox" name="" id="terms">
        </label>
        <select name="selectedOption" id="options">
            <option value="Option 1">Opton 1</option>
            <option value="Option 2">Opton 2</option>
            <option value="Option 3">Opton 2</option>
        </select>
        <input type="submit" value="">
    </form>
</body>
```

### **JavaScript** 
**Without using a loop**
```js
const form = document.querySelector('#signup-form')
const creditCardInput = document.querySelector('#cc')
const termsCheckbox = const.document.querySelector('#terms')
const optionsSelect = const.document.querySelector('#options')

const formData = {};

// this will update the formData object with the latest values
creditCardInput.addEventListener('input', (e) => {
    console.log('value in input box has changed');
    formData['cc'] = e.target.value;
})

termsCheckbox.addEventListener('input', (e) => {
    console.log('value in input box has changed');
    formData['terms'] = e.target.checked;
})

optionsSelect.addEventListener('input', (e) => {
    console.log('value in the select dropdown has changed');
    formData['options'] = e.target.value;
})
```

<br>

**With using a loop**

```js
const form = document.querySelector('#signup-form')
const creditCardInput = document.querySelector('#cc')
const termsCheckbox = const.document.querySelector('#terms')
const optionsSelect = const.document.querySelector('#options')

const formData = {};

for (let input of [creditCardInput, termsCheckbox, optionsSelect]){
    input.addEventListener('input', ({target}) => {
        // we do this because we have to use the checked
        // or value keywords depending if we want to get the
        // value from the checkbox or one of the two other inputs
        const {name, type, value, checked} = target
        formData[name] = type === 'checkbox' ? checked : value;
    });
}
```




