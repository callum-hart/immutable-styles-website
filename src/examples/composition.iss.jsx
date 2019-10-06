import { createStyle, createMixin } from 'immutable-styles';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';

const mixins = {
  button: createMixin(
    <button>
      { fontSans }
      padding: var(--size-xs) var(--size-m);
      border-width: 3px;
      border-style: solid;
      width: 100%;
    </button>
  )
};

export default [
  <mixins.button className="primary-button">
    background: var(--mode-background);
    color: var(--mode-color);
    border-color: var(--mode-background);
  </mixins.button>,
  <mixins.button className="primary-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="secondary-button">
    background: var(--mode-color);
    color: var(--mode-background);
    border-color: var(--mode-background);
  </mixins.button>,
  <mixins.button className="secondary-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="tertery-button">
    background: #9E9E9D;
    color: var(--mode-color);
    border-color: #9E9E9D;
  </mixins.button>,
  <mixins.button className="tertery-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <div className="example-composition-result">
    display: flex;
    flex-direction: column;
    min-height: 200px;
    justify-content: space-between;
  </div>
];