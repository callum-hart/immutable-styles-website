import { createStyle, createMixin } from 'immutable-styles';

const mixins = {
  button: createMixin(
    <button>
      font-size: var(--size-scale);
      font-family: 'Muli', sans-serif;
      font-weight: 700;
      padding: var(--size-xs) var(--size-m);
      border-width: 3px;
      border-style: solid;
      width: 100%;
    </button>
  )
};

export default [
  <div className="example-composition-result">
    display: flex;
    flex-direction: column;
    min-height: 200px;
    justify-content: space-between;
  </div>,

  <mixins.button className="primary-button">
    background: var(--example-background);
    color: var(--example-heading-color);
    border-color: var(--example-background);
  </mixins.button>,

  <mixins.button className="secondary-button">
    background: var(--example-heading-color);
    color: var(--example-background);
    border-color: var(--example-background);
  </mixins.button>,

  <mixins.button className="tertery-button">
    background: var(--example-heading-color);
    color: #9E9E9D;
    border-color: #9E9E9D;
  </mixins.button>
];