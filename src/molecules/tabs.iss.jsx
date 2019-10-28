import { createStyle, createMixin } from 'immutable-styles';

import { contrast_2, contrast_3, contrast_3__hover, contrast_4 } from '../constants/palette';
import { font_sans } from '../constants/typography';
import { focus_shadow, composedFocusShadow } from '../constants/accessibility';
import { hover_transition } from '../constants/transition';

const mixins = {
  button: createMixin(
    <button>
      { font_sans }
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
      { hover_transition }
      background: { contrast_3 };
    </mixins.button>

    <mixins.button pseudo=":hover" className="tab-button">
      background: { contrast_3__hover };
    </mixins.button>

    <button pseudo=":focus" className="tab-button">
      { focus_shadow }
      position: relative;
    </button>

    <button pseudo=":focus" className="tab-button active">
      { focus_shadow }
      position: relative;
    </button>
  </div>,

  <div className="tabpanel">
    padding: var(--size-s);
    box-shadow: var(--size-xs) var(--size-xs) { contrast_3 };
  </div>,

  <div pseudo=":focus" className="tabpanel">
    { composedFocusShadow(`var(--size-xs) var(--size-xs) ${ contrast_3 }`) };
    position: relative;
  </div>,

  <div className="tabs-dark">
    <div className="tablist">
      <mixins.button className="tab-button active">
        background: { contrast_4 };
        color: { contrast_2 };
      </mixins.button>
    </div>

    <div className="tabpanel">
      background: { contrast_4 };
    </div>
  </div>,

  <div className="tabs-light">
    <div className="tablist">
      <mixins.button className="tab-button active">
        background: { contrast_2 };
        color: { contrast_4 };
      </mixins.button>
    </div>

    <div className="tabpanel">
      background: { contrast_2 };
    </div>
  </div>
];