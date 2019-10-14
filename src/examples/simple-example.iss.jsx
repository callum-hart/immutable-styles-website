import { createStyle } from 'immutable-styles';
import { fontSans } from '../constants/typography';
import { palette } from '../constants/palette';

export default (
  <fieldset>
    padding: var(--size-m);
    border: 2px solid {palette.mediumContrast};

    <legend>
      { fontSans }
      color: {palette.highContrast};
    </legend>
  </fieldset>
);
