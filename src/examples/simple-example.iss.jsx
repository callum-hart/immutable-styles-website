import { createStyle } from 'immutable-styles';

import { contrast_l, contrast_m } from '../constants/palette';
import { fontSans } from '../constants/typography';

export default (
  <fieldset>
    border: 2px solid { contrast_m };
    padding: var(--size-m);

    <legend>
      { fontSans }
      color: { contrast_l };
    </legend>
  </fieldset>
);
