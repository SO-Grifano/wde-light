# Webflow Development Environment - Light

Light version of Webflow Developer Environment.<br>
To improve writing custom CSS styles, or JavaScript code.

This version includes only custom.css and custom.js.<br>
No TypeScript files or compilation using esBuild.

Will be good for beginners who want to just write styles and simple JS.

## Installation:

1. Clone this repository.
2. Install the `serve` package using the command: `npm i`
3. Run `serve` using the command: `npm run serve`
4. Add to the head tag:

```html
<!-- [Open] Webflow-Dev-Env - CSS -->
<link rel="stylesheet" href="http://localhost:3000/css/custom.css" />
<!-- [Close] Webflow-Dev-Env - CSS -->
```

5. Add before close body tag:

```html
<!-- [Open] Webflow-Dev-Env - JS -->
<script src="http://localhost:3000/js/custom.js"></script>
<!-- [Close] Webflow-Dev-Env - JS -->
```

6. Save and Publish your website.
7. Reload page, if you see message "WDE is connected successfuly!" all good
8. Remove class:

```css
/* ! Remove this class when you see the success message */
.remove-me {
  background-color: #e5f9f4;
  font-size: 2rem;
  text-align: center;
  color: #00c48d;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 2px solid #00c48d;
  position: fixed;
  padding: 1.25rem;
  top: 50%;
  left: 50%;
  width: 50vw;
  box-shadow: 0px 16px 64px hsla(0, 0%, 0%, 0.2);
  transform: translate(-50%, -50%);
}
```

9. Remove code:

```js
// [Open] Remove Me
const removeMe = () => {
  const msgBlock = document.createElement("div");
  msgBlock.className = "remove-me";
  msgBlock.textContent =
    "The Webflow Development Environment is connected successufly!";
  document.body.appendChild(msgBlock);
};
removeMe();
// [Close] Remove Me
```
