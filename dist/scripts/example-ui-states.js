window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#example-ui-states-form');
  const primaryButton = form.querySelector('.primary-button');
  const secondaryButton = form.querySelector('.secondary-button');

  primaryButton.addEventListener('click', e => {
    form.classList.add('form--disabled');
  });
});