import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <div className="hero">
    height: 75vh;
    background-color: {palette.lowContrast};
    background-image: url(./images/polygon.svg);
    background-size: 100% 10vh;
    background-repeat: no-repeat;
    background-position: bottom;

    <section className="container">
      <h1>
        margin: 0;
        max-width: 25ch;
        color: {palette.highContrast};
      </h1>

      <h2>
        margin: var(--spacing-s) 0 var(--spacing-m);
        max-width: 50ch;
        color: {palette.mediumContrast};
      </h2>
    </section>
  </div>
);
