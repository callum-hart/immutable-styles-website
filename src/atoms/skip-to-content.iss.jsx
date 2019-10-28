import { createStyle } from 'immutable-styles';

import { focus_shadow } from '../constants/accessibility';
import { contrast_2, contrast_4 } from '../constants/palette';
import { font_sans } from '../constants/typography';

export default [
  <a className="skip-to-content">
    { font_sans }
    background: { contrast_2 };
    color: { contrast_4 };
    padding: var(--size-xs) var(--size-m);
    position: absolute;
    text-decoration: none;
    top: -100px;
  </a>,

  <a className="skip-to-content" pseudo=":focus">
    { focus_shadow }
    left: var(--size-m);
    top: var(--size-m);
  </a>
];