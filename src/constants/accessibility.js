const focusShadow = `
  position: relative;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #A8CBF5;
`;

const composedFocusShadow = baseShadow => `
  position: relative;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #A8CBF5, ${baseShadow};
`;

module.exports = {
  focusShadow,
  composedFocusShadow
};