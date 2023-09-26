import { Mouse } from "./icons.module.js";
import { Validation } from "./emailValid.module.js";

let socialIcons = document.querySelectorAll(".icons"),
  submitForm = document.querySelector(".form-control");

/* icons color changes */
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", (e) => {
    Mouse.enter(e);
  });

  icon.addEventListener("mouseleave", () => {
    Mouse.leave();
  });
});

/* red error notice */
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  Validation.validation(e);
});
