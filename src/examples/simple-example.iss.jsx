import { createStyle } from 'immutable-styles';
import { fontSans_s } from '../constants/typography';
import { palette } from '../constants/palette';

export default (
  <fieldset>
    padding: var(--size-m);
    border: 2px solid {palette.mediumContrast};

    <legend>
      { fontSans_s }
      color: {palette.highContrast};
    </legend>
  </fieldset>
);
