import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <div className="hero">
    display: flex;
    align-items: center;
    height: calc(75vh + var(--header-height) / 2);
    min-height: 500px;
    margin-top: calc(var(--header-height) / 2 * -1);
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
  </div>
);
