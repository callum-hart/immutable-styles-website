import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';

export default [
  <a className="skip-to-content">
    { fontSans }
    text-decoration: none;
    position: absolute;
    top: -100px;
    padding: var(--size-xs) var(--size-m);
    background: {palette.highContrast};
    color: {palette.lowContrast};
  </a>,

  <a className="skip-to-content" pseudo=":focus">
    { focusShadow }
    top: var(--size-m);
    left: var(--size-m);
  </a>
];