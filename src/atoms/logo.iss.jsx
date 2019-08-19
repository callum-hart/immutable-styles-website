import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_s, from_s } from '../constants/breakpoint';

export default (
  <div className="logo">
    display: flex;
    align-items: center;

    <svg {...to_s}>
      width: 75px;
    </svg>

    <svg {...from_s}>
      width: 100px;
    </svg>

    <p className="logo-text">
      max-width: 16ch;
      text-indent: 1ch;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 1rem;
      color: {palette.mediumContrast};
    </p>
  </div>
);
