import { createStyle } from 'immutable-styles';
import { transparentize } from 'polished';
import { palette } from '../constants/palette';

export default [
  <a className="link">
    font-size: 14px;
    font-family: 'Muli', sans-serif;
    font-weight: 100;
    text-decoration: none;
    padding: 0 2px;
    color: {palette.tertiaryCta};
    background: {transparentize(0.8, palette.tertiaryCta)};
    border-bottom: 1px dotted;
  </a>,

  <a className="link" pseudo=":hover">
    border-bottom-style: solid;
  </a>
];