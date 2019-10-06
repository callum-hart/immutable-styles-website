import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow, composedFocusShadow } from '../constants/accessibility';

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
      background: {palette.mediumContrast};
    </mixins.button>

    <button pseudo=":focus" className="tab-button">
      { focusShadow }
    </button>

    <button pseudo=":focus" className="tab-button active">
      { focusShadow }
    </button>
  </div>,

  <div className="tabpanel">
    padding: var(--size-s);
    box-shadow: var(--size-xs) var(--size-xs) {palette.mediumContrast};
  </div>,

  <div pseudo=":focus" className="tabpanel">
    { composedFocusShadow(`var(--size-xs) var(--size-xs) ${palette.mediumContrast}`) };
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