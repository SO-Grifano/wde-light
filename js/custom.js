console.log("Webflow-Dev-Env is connected...");

// Remove this function when you see the success message
const removeMe = () => {
  const msgBlock = document.createElement("div");
  msgBlock.className = "remove-me";
  msgBlock.textContent =
    "The Webflow Development Environment is connected successufly!";
  document.body.appendChild(msgBlock);
};
removeMe();
