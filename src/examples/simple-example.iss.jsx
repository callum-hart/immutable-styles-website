import { createStyle } from 'immutable-styles';

import { fontSans_s } from '../constants/typography';

export default (
  <fieldset>
    padding: var(--size-m);
    border: 2px solid #9E9E9D;

    <legend>
      { fontSans_s }
      color: var(--example-background);
    </legend>
  </fieldset>
);
