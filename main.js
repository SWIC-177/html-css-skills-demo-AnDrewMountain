/**
 * TODO:
 * 1. 'Select' all of the input fields.
 * 2. 'Select' the submit button.
 * 3. Add event listeners to each input field, such that
 *  upon losing focus (`blur` event) on the input fields, we will
 * show the error. For now, we are not validating the input fields.
 */

import { ERRORS, hideError, renderError } from "./lib.js";

console.log(ERRORS);

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);

// const submitBtn = document.querySelector("button[type='submit']");

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (!elError.validate(e.target.value)) renderError(e.target, elError.msg);
    else hideError(e.target);
  });
});
