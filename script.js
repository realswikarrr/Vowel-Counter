const textInput = document.querySelector("[data-input-text]");
const button = document.querySelector("#check-btn");
const counter = document.querySelector("#vowel-count");

vowel = "aeiou";

button.addEventListener("click", function (e) {
  text = textInput.value;
  count = 0;
  for (i = 0; i < text.length; i++) {
    if (vowel.indexOf(text[i].toLowerCase()) > -1) {
      count++;
    }
  }
  counter.textContent = count;
  textInput.value = "";
  text = [];
});
