let validation = (event) => {
  let valueEmail = document.querySelector(".input-text"),
    valid = test(valueEmail.value),
    errorDesktop = document.querySelector(".error-message"),
    errorMobile = document.querySelector(".error-message-mobile");

  if (!valid) {
    errorDesktop.style.display = "block";
    valueEmail.classList.add("error");
    valueEmail.placeholder = "example@email/com";
    valueEmail.style.setProperty("--gray", "black");
  } else if (!valid && window.screen.width < 900) {
    errorMobile.style.display = "block";
    valueEmail.classList.add("error");
  } else {
    errorDesktop.style.display = "none";
    errorMobile.style.display = "none";
    valueEmail.classList.remove("error");

    event.currentTarget.submit();
  }
};

/* helper function */
let test = function (email) {
  let validEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm;

  return validEmail.test(email);
};

export let Validation = {
  validation: validation,
};
