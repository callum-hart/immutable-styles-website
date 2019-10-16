import { createStyle } from 'immutable-styles';

import { to_m, from_m } from '../constants/breakpoint';
import { contrast_s } from '../constants/palette';

export default [
  <body>
    --header-height: 25vh;
  </body>,

  <header>
    background: { contrast_s };

    <section className="container">
      align-items: center;
      display: flex;
      justify-content: space-between;
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