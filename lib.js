export const ERRORS = [
  {
    id: "name",
    msg: "please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  { id: "email", msg: "Please enter a valid email address" },
  { id: "phone", msg: "Please enter a valid phone number" },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters long",
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove("is-error");
};

export const renderError = (el, msg) => {
  const errorEl = el.parentNode.QuerySelector(".error");

  if (errorEl) errorEl.classList.add("is-error");
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    el.parentNode.appendChild(errorElement);
  }
};
