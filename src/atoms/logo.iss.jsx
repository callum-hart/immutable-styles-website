import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <div className="logo">
    display: flex;
    align-items: center;

    <object className="logo-image">
      width: 80px;
    </object>

    <div className="logo-text">
      <p>
        font-family: 'IBM Plex Mono';
        font-size: var(--font-s);
        color: {palette.mediumContrast};
      </p>
      <p pseudo=":first-of-type">
        margin: 0 0 0 6px;
      </p>
      <p pseudo=":last-of-type">
        margin: 0;
      </p>
    </div>
  </div>
);
