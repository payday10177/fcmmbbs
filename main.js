inputs.forEach((input) => {
  input.addEventListener("keyup", handleInput);
});

function handleInput(e) {
  if (inputs.some((input) => input.value == "")) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}
