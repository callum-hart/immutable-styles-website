import { createStyle } from 'immutable-styles';

import { to_s, from_s_to_m } from '../constants/breakpoint';
import { contrast_m} from '../constants/palette';
import { fontMono } from '../constants/typography';

export default [
  <svg className="infographic">
    box-shadow: var(--size-xs) var(--size-xs) { contrast_m };
    width: auto;
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