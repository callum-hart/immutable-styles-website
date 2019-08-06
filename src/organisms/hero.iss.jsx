import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_m, from_m } from '../constants/breakpoint';

export default [
  <div className="hero">
    display: flex;
    align-items: center;
    background-color: {palette.lowContrast};
    background-image: url(./images/polygon.svg);
    background-size: 100% 50px;
    background-repeat: no-repeat;
    background-position: bottom;

    <section className="container">
      <h1>
        margin: 0;
        max-width: 25ch;
        color: {palette.highContrast};
      </h1>

      <h2>
        max-width: 50ch;
        color: {palette.mediumContrast};
      </h2>
    </section>
  </div>,

  <div {...to_m} className="hero">
    padding-top: var(--size-m);
    padding-bottom: var(--size-xl);
  </div>,

  <div {...from_m} className="hero">
    height: calc(75vh + var(--header-height) / 2);
    min-height: 500px;
    margin-top: calc(var(--header-height) / 2 * -1);
  </div>
];
