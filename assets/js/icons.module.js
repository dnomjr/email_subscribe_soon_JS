let enter = (icon) => {
  let div = icon.target,
    currentIcon = div.firstElementChild;

  currentIcon.classList.add("svg-hover");
};

let leave = () => {
  let svg = document.querySelectorAll(".svg-fb");

  svg.forEach((icon) => {
    icon.classList.remove("svg-hover");
  });
};

export let Mouse = {
  enter: enter,
  leave: leave,
};
