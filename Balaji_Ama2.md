## 1. How can you swap two child elements inside a parent using JavaScript?
Save one element, use `replaceChild()` and `insertBefore()` to switch positions.

---

## 2. What does setInterval() do in JavaScript?
It repeatedly runs a function after a fixed time delay.

---

## 3. What is the use of media queries in CSS?
Media queries make websites responsive by applying different styles based on screen size or device type.

---

## 4. How can you select an element in the DOM?
You can use `getElementById()`, `querySelector()`, or `getElementsByClassName()`.

---

## 5. What is the difference between innerText, textContent, and innerHTML?
- `innerText` shows visible text.
- `textContent` shows all text.
- `innerHTML` includes HTML tags too.

---

## 6. How do you create  a new element in the DOM?
Use `document.createElement('div')`.

---

## 7. How do you change the style of an element using JavaScript?
Use `element.style.propertyName = "value"` like `div.style.color = "red"`.

---

## 8. What is the difference between append(), appendChild(), and prepend()?
- `append()` and `appendChild()` add elements at the end.
- `prepend()` adds at the beginning.

---

## 9. How do you insert a new element into the DOM?
Insert with `appendChild()` or `append()`.

---

## 10. When we submit a form, the page refreshes — how can we prevent that using JavaScript?
Use `event.preventDefault()` inside the form's submit event listener to stop the page from refreshing:

```js
form.addEventListener('submit', function(e) {
    e.preventDefault(); // stops the refresh
    // your logic here
});
```