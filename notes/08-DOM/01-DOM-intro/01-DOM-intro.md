# Document Object Model (DOM)

## Selectors:

### .getElementById()

### .getElementsByTagName()

- Returns a lightweight array-like object
  
### .getElementsByClassName()

- Returns a lightweight array-like object

### .querySelector()

  * document.querySelector(`h1`)
  * document.querySelector(`#red`)
  * document.querySelector(`.big`)

### .querySelectorAll()

  * document.querySelectorAll(`h1`)
  * document.querySelectorAll(`#red`)
  * document.querySelectorAll(`.big`)
<br><br><br>

### innerText

- The text inside the element.
- If the element selected contains elements within it, <br>
  then the text on all these elements will be returned

### textContent

- The text inside the element including spacing, <br>
  and also text inside other elements.

### innerHTML

- Returns a string representation of the elements within an element.
- If the element does not cotains sub-elements, then the text
  of the element is returned.
- Can be used to modify the text + style of an element.
  - element.innerHTML = "`<b>` NEW TEXT IN BOLD`</b>`"

### value

- Get the text inside a form element

### checked

- Available as an attribute of checkboxes within a form

### src

### href

- Available as an attribute on links (\<a>-tags)

### getAttribute()

- const firstLink = document.querySelector(`a`)
- firstLink.getAttribute(`"href"`)

### setAttribute()

- const firstLink = document.querySelector(`a`)
- firstLink.setAttribute(`"href", 'https://www.new-address.com`)

### parentElement, children, next Sibling, previous Sibling

- Finding the elements that are close to a specified element
- Can be chained

### getComputedStyle

- Returns all the `CSS` styles of an element.
- const li = document.querySelector(`li`)
- styles = getComputedStyles(`li`)

### classList()

- element.classList.add(`nameOfClass`)
- element.classList.remove(`nameOfClass`)
- element.classList.toggle(`nameOfClass`)

### createElement()

- const newH2Element = document.createElement(`h2`)
- newH2Element.innerText = `"This is a new element"`
- newH2Element.classList.add(`"class-name"`)
- const section = document.querySelector(`section`)
- section.appendChild(newH2Element)

### append(), prepend(), insertBefore(), insertAdjacentElement(), append()

- `appendChild` gets called from the parent
  - const parent = document.querySelector(`ul`)
  - parent.append(`newListElement`)
- `insertBefore` also gets called from the parent
  - parent.insertBefore(`newItem, itemToInsertBefore`)
  - both items to insert and insert before must be stored as objects
- `insertAdjacentElement`
  - Options: beforebegin, afterbegin, beforeend, afterend
- `append`
  - newer than appencChild
  - can be used to insert multiple elements at once
  - will insert at the end
- `prepend`
  - can be used to insert multiple elements at once
  - will insert at the beginning

### removeChild(), remove()

- `removeChild` removes the child node from the DOM and returns the removed node
  - called from the parent
  - const ul = docuent.querySelector(`section ul`)
  - const removeMe = ul.querySelector(`.sepcial`)
  - const removed = ul.removeChild(`removeMe`) 

- `remove` 
  - does **NOT** have to be called fro the parent.
  <br><br>

  ```js
  const h1 = document.querySelector(`h1`)
  h1.remove()
  ```
