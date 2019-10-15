import { createStyle, createMixin } from 'immutable-styles';
import { darken } from 'polished';

import { palette } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow, composedFocusShadow } from '../constants/accessibility';
import { hoverTransition } from '../constants/transition';

const mixins = {
  button: createMixin(
    <button>
      { fontSans }
      border: none;
      padding: var(--size-xs) var(--size-m);
    </button>
  )
};

export default [
  <div className="tablist">
    display: flex;
    justify-content: flex-end;
    margin-right: var(--size-xs);

    <mixins.button className="tab-button">
      { hoverTransition }
      background: {palette.mediumContrast};
    </mixins.button>

    <mixins.button pseudo=":hover" className="tab-button">
      background: {darken(0.1, '#9E9E9D')};
    </mixins.button>

    <button pseudo=":focus" className="tab-button">
      { focusShadow }
      position: relative;
    </button>

    <button pseudo=":focus" className="tab-button active">
      { focusShadow }
      position: relative;
    </button>
  </div>,

  <div className="tabpanel">
    padding: var(--size-s);
    box-shadow: var(--size-xs) var(--size-xs) {palette.mediumContrast};
  </div>,

  <div pseudo=":focus" className="tabpanel">
    { composedFocusShadow(`var(--size-xs) var(--size-xs) ${palette.mediumContrast}`) };
    position: relative;
  </div>,

  <div className="tabs-dark">
    <div className="tablist">
      <mixins.button className="tab-button active">
        background: {palette.lowContrast};
        color: {palette.highContrast};
      </mixins.button>
    </div>

    <div className="tabpanel">
      background: {palette.lowContrast};
    </div>
  </div>,

  <div className="tabs-light">
    <div className="tablist">
      <mixins.button className="tab-button active">
        background: {palette.highContrast};
        color: {palette.lowContrast};
      </mixins.button>
    </div>

    <div className="tabpanel">
      background: {palette.highContrast};
    </div>
  </div>
];