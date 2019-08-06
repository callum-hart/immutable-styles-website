import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_s, from_s } from '../constants/breakpoint';

export default (
  <div className="logo">
    display: flex;
    align-items: center;

    <object {...to_s} className="logo-image">
      width: 75px;
    </object>

    <object {...from_s} className="logo-image">
      width: 100px;
    </object>

    <p className="logo-text">
      max-width: 16ch;
      text-indent: 1ch;
      font-family: 'IBM Plex Mono';
      font-size: 1rem;
      color: {palette.mediumContrast};
    </p>
  </div>
);
