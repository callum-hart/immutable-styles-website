import { createStyle } from 'immutable-styles';

import { to_m, from_m } from '../constants/breakpoint';
import { contrast_l, contrast_m, contrast_s } from '../constants/palette';

export default [
  <div className="hero">
    align-items: center;
    background-color: { contrast_s };
    background-image: url(./images/polygon.svg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 50px;
    display: flex;

    <section className="container">
      <h1>
        color: { contrast_l };
        margin: 0;
        max-width: 25ch;
      </h1>

      <h2>
        max-width: 50ch;
        color: { contrast_m };
      </h2>
    </section>
  </div>,

  <div {...to_m} className="hero">
    padding-bottom: var(--size-xl);
    padding-top: var(--size-m);
  </div>,

  <div {...from_m} className="hero">
    height: calc(75vh + var(--header-height) / 2);
    margin-top: calc(var(--header-height) / 2 * -1);
    min-height: 500px;
  </div>
];
