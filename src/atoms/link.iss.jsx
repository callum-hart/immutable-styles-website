import { createStyle } from 'immutable-styles';
import { darken } from 'polished';

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

  <a pseudo=":hover" className="link">
    color: {darken(0.1, '#EB6A6C')};
  </a>,

  <a pseudo=":focus" className="link">
    { focusShadow }
  </a>
];