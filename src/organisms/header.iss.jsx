import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_m, from_m } from '../constants/breakpoint';

export default [
  <body>
    --header-height: 25vh;
  </body>,

  <header>
    background: {palette.lowContrast};

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>
  </header>,

  <header {...to_m}>
    padding: var(--size-l) 0;
  </header>,

  <header {...from_m}>
    height: var(--header-height);
    min-height: 140px;

    <section className="container">
      height: 100%;
    </section>
  </header>
];