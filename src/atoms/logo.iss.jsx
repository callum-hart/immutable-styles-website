import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <div className="logo">
    display: flex;
    align-items: center;

    <object className="logo-image">
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
