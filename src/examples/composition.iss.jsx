import { createStyle, createMixin } from 'immutable-styles';

import { focusShadow } from '../constants/accessibility';
import { contrast_l, contrast_m, contrast_s } from '../constants/palette';
import { fontSans } from '../constants/typography';

const mixins = {
  button: createMixin(
    <button>
      { fontSans }
      border-style: solid;
      border-width: 3px;
      padding: var(--size-xs) var(--size-m);
      width: 100%;
    </button>
  )
};

export default [
  <mixins.button className="primary-button">
    color: { contrast_s };
    background: { contrast_l };
    border-color: { contrast_l };
  </mixins.button>,
  <mixins.button className="primary-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="secondary-button">
    color: { contrast_l };
    background: { contrast_s };
    border-color: { contrast_l };
  </mixins.button>,
  <mixins.button className="secondary-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="tertery-button">
    color: { contrast_s };
    background: { contrast_m };
    border-color: { contrast_m };
  </mixins.button>,
  <mixins.button className="tertery-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <div className="example-composition-result">
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
  </div>
];