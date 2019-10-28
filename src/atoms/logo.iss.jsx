import { createStyle } from 'immutable-styles';

import { to_s, from_s } from '../constants/breakpoint';
import { contrast_3 } from '../constants/palette';
import { font_mono } from '../constants/typography';

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
      { font_mono }
      color: { contrast_3 };
      max-width: 16ch;
      text-indent: 1ch;
    </p>

    <p {...to_s} className="logo-text">
      display: none;
    </p>
  </div>
);
