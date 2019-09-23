import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

const tabs = {
  button: {
    default: createMixin(
      <button>
        font-size: var(--size-scale);
        font-family: 'Muli', sans-serif;
        font-weight: 700;
        padding: var(--size-xs) var(--size-m);
        color: var(--example-background);
        border: none;
      </button>
    )
  }
}

export default (
  <div className="tabs">
    <div className="tablist">
      display: flex;
      justify-content: flex-end;
      margin-right: var(--size-xs);

      <tabs.button.default className="tab-button">
        background: {palette.mediumContrast};
      </tabs.button.default>

      <tabs.button.default className="tab-button active">
        background: var(--example-heading-color);
      </tabs.button.default>
    </div>

    <div className="tabpanel">
      padding: var(--size-s);
      background: var(--code-background);
      box-shadow: var(--size-xs) var(--size-xs) {palette.mediumContrast};
    </div>
  </div>
);