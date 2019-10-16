import { createStyle } from 'immutable-styles';

import { contrast_s } from '../constants/palette';

export default (
  <footer>
    background: { contrast_s };
    padding: var(--size-l) 0;

    <section className="container">
      align-items: center;
      display: flex;
      justify-content: space-between;
    </section>
  </footer>
);
