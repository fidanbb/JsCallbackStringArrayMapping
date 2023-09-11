"use strict";

function reverseText(text) {
  let emptyText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    emptyText += text[i];
  }

  console.log(emptyText);
}

let text = "Fidan";
reverseText(text);
