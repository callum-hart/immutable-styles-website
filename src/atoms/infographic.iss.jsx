import { createStyle } from 'immutable-styles';
import { to_xs, from_xs_to_s, to_s } from '../constants/breakpoint';

export default [
  <div {...to_xs} className="infographic">
    <svg>
      height: 75px;
      width: auto;
    </svg>
  </div>,

  <div {...from_xs_to_s} className="infographic">
    <svg>
      height: 100px;
      width: auto;
    </svg>
  </div>,

  <text className="svg-text">
    font-family: 'IBM Plex Mono', monospace;
  </text>,

  <text {...to_s} className="svg-text">
    display: none;
  </text>
];