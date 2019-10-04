import { createStyle } from 'immutable-styles';

import { fontMono } from '../constants/typography';
import { palette} from '../constants/palette';
import { to_s, from_s_to_m } from '../constants/breakpoint';

export default [
  <svg className="infographic">
    width: auto;
    box-shadow: var(--size-xs) var(--size-xs) {palette.mediumContrast};
  </svg>,

  <svg {...to_s} className="infographic">
    height: 75px;
  </svg>,

  <svg {...from_s_to_m} className="infographic">
    height: 125px;
  </svg>,

  <text className="svg-text">
    { fontMono }
  </text>,

  <text className="svg-text hide-to-s">
    { fontMono }
  </text>,

  <text {...to_s} className="svg-text hide-to-s">
    display: none;
  </text>
];