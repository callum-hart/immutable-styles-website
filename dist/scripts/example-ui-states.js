window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#example-ui-states-form');
  const primaryButton = form.querySelector('.primary-btn');

  primaryButton.addEventListener('click', e => {
    form.classList.add('form--disabled');
  });
});