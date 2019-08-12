import { createStyle } from 'immutable-styles';
import {  palette} from '../constants/palette';
import { to_s, from_s_to_m } from '../constants/breakpoint';

export default [
  <div className="no-side-effects">
    <svg className="infographic">
      box-shadow: var(--size-xs) var(--size-xs) #6BFB8C;
    </svg>
  </div>,

  <div className="instant-feedback-loop">
    <svg className="infographic">
      box-shadow: var(--size-xs) var(--size-xs) #57D2F1;
    </svg>
  </div>,

  <div className="deterministic">
    <svg className="infographic">
      box-shadow: var(--size-xs) var(--size-xs) #F8656B;
    </svg>
  </div>,

  <div className="composition-vs-overrides">
    <svg className="infographic">
      box-shadow: var(--size-xs) var(--size-xs) {palette.primaryCta};
    </svg>
  </div>,

  <svg className="infographic">
    width: auto;
  </svg>,

  <svg {...to_s} className="infographic">
    height: 75px;
  </svg>,

  <svg {...from_s_to_m} className="infographic">
    height: 125px;
  </svg>,

  <text className="svg-text">
    font-family: 'IBM Plex Mono', monospace;
  </text>,

  <text className="svg-text hide-to-s">
    font-family: 'IBM Plex Mono', monospace;
  </text>,

  <text {...to_s} className="svg-text hide-to-s">
    display: none;
  </text>
];