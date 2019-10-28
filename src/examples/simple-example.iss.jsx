import { createStyle } from 'immutable-styles';

import { contrast_2, contrast_3 } from '../constants/palette';
import { font_sans } from '../constants/typography';

export default (
  <fieldset>
    border: 2px solid { contrast_3 };
    padding: var(--size-m);

    <legend>
      { font_sans }
      color: { contrast_2 };
    </legend>
  </fieldset>
);
