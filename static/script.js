import "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js";

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const buttonRipple = MDCRipple.attachTo(document.querySelector('#btn1'));
const buttonRipple2 = MDCRipple.attachTo(document.querySelector('#btn2'));

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});