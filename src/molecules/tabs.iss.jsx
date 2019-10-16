import { createStyle, createMixin } from 'immutable-styles';

import { contrast_l, contrast_m, contrast_m__hover, contrast_s } from '../constants/palette';
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
      background: { contrast_m };
    </mixins.button>

    <mixins.button pseudo=":hover" className="tab-button">
      background: { contrast_m__hover };
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
    box-shadow: var(--size-xs) var(--size-xs) { contrast_m };
  </div>,

  <div pseudo=":focus" className="tabpanel">
    { composedFocusShadow(`var(--size-xs) var(--size-xs) ${ contrast_m }`) };
    position: relative;
  </div>,

  <div className="tabs-dark">
    <div className="tablist">
      <mixins.button className="tab-button active">
        background: { contrast_s };
        color: { contrast_l };
      </mixins.button>
    </div>

    <div className="tabpanel">
      background: { contrast_s };
    </div>
  </div>,

  <div className="tabs-light">
    <div className="tablist">
      <mixins.button className="tab-button active">
        background: { contrast_l };
        color: { contrast_s };
      </mixins.button>
    </div>

    <div className="tabpanel">
      background: { contrast_l };
    </div>
  </div>
];