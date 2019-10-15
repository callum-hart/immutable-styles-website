import { createStyle } from 'immutable-styles';

import { palette } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';

export default [
  <a className="link">
    { fontSans }
    color: {palette.tertiaryCta};
    border-bottom: 1px solid {palette.tertiaryCta};
    text-decoration: none;
  </a>,

  <a className="link" pseudo=":focus">
    { focusShadow }
  </a>
];