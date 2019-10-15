import { createStyle } from 'immutable-styles';

import { fontMono } from '../constants/typography';
import { palette } from '../constants/palette';
import { to_s, from_s } from '../constants/breakpoint';

export default (
  <div className="logo">
    display: flex;
    align-items: center;

    <svg {...to_s}>
      width: 80px;
    </svg>

    <svg {...from_s}>
      width: 100px;
    </svg>

    <p className="logo-text">
      { fontMono }
      max-width: 16ch;
      text-indent: 1ch;
      color: {palette.mediumContrast};
    </p>

    <p {...to_s} className="logo-text">
      display: none;
    </p>
  </div>
);
