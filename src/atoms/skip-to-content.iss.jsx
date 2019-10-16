import { createStyle } from 'immutable-styles';

import { focusShadow } from '../constants/accessibility';
import { contrast_l, contrast_s } from '../constants/palette';
import { fontSans } from '../constants/typography';

export default [
  <a className="skip-to-content">
    { fontSans }
    background: { contrast_l };
    color: { contrast_s };
    padding: var(--size-xs) var(--size-m);
    position: absolute;
    text-decoration: none;
    top: -100px;
  </a>,

  <a className="skip-to-content" pseudo=":focus">
    { focusShadow }
    left: var(--size-m);
    top: var(--size-m);
  </a>
];