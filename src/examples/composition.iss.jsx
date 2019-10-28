import { createStyle, createMixin } from 'immutable-styles';

import { focus_shadow } from '../constants/accessibility';
import { contrast_2, contrast_3, contrast_4 } from '../constants/palette';
import { font_sans } from '../constants/typography';

const mixins = {
  button: createMixin(
    <button>
      { font_sans }
      border-style: solid;
      border-width: 3px;
      padding: var(--size-xs) var(--size-m);
      width: 100%;
    </button>
  )
};

export default [
  <mixins.button className="primary-btn">
    color: { contrast_4 };
    background: { contrast_2 };
    border-color: { contrast_2 };
  </mixins.button>,
  <mixins.button className="primary-btn" pseudo=":focus">
    { focus_shadow }
  </mixins.button>,

  <mixins.button className="secondary-btn">
    color: { contrast_2 };
    background: { contrast_4 };
    border-color: { contrast_2 };
  </mixins.button>,
  <mixins.button className="secondary-btn" pseudo=":focus">
    { focus_shadow }
  </mixins.button>,

  <mixins.button className="tertery-btn">
    color: { contrast_4 };
    background: { contrast_3 };
    border-color: { contrast_3 };
  </mixins.button>,
  <mixins.button className="tertery-btn" pseudo=":focus">
    { focus_shadow }
  </mixins.button>,

  <div className="example-composition-result">
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
  </div>
];