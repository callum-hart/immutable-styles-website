import { createStyle } from 'immutable-styles';

import { to_s, from_s } from '../constants/breakpoint';
import { contrast_m } from '../constants/palette';
import { fontMono } from '../constants/typography';

export default (
  <div className="logo">
    align-items: center;
    display: flex;

    <svg {...to_s}>
      width: 80px;
    </svg>

    <svg {...from_s}>
      width: 100px;
    </svg>

    <p className="logo-text">
      { fontMono }
      color: { contrast_m };
      max-width: 16ch;
      text-indent: 1ch;
    </p>

    <p {...to_s} className="logo-text">
      display: none;
    </p>
  </div>
);
