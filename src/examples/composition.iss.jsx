import { createStyle, createMixin } from 'immutable-styles';
import { focusShadow } from '../constants/accessibility';
import { fontSans } from '../constants/typography';
import { palette } from '../constants/palette';

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
    background: {palette.highContrast};
    color: {palette.lowContrast};
    border-color: {palette.highContrast};
  </mixins.button>,
  <mixins.button className="primary-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="secondary-button">
    background: {palette.lowContrast};
    color: {palette.highContrast};
    border-color: {palette.highContrast};
  </mixins.button>,
  <mixins.button className="secondary-button" pseudo=":focus">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="tertery-button">
    background: {palette.mediumContrast};
    color: {palette.lowContrast};
    border-color: {palette.mediumContrast};
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