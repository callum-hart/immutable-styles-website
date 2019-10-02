import { createStyle } from 'immutable-styles';
import { transparentize } from 'polished';
import { palette } from '../constants/palette';
import { focusShadow } from '../constants/accessibility';

export default [
  <a className="link">
    font-size: var(--size-scale);
    font-family: 'Muli', sans-serif;
    text-decoration: none;
    padding: 0 2px;
    color: {palette.tertiaryCta};
    background: {transparentize(0.8, palette.tertiaryCta)};
    border-bottom: 1px solid;
  </a>,

  <a className="link" pseudo=":hover">
    border-bottom-style: solid;
  </a>,

  <a className="link" pseudo=":focus">
    { focusShadow };
  </a>
];