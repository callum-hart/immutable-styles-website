import { createStyle } from 'immutable-styles';

import { contrast_4 } from '../constants/palette';

export default (
  <footer>
    background: { contrast_4 };
    padding: var(--size-l) 0;

    <section className="container">
      align-items: center;
      display: flex;
      justify-content: space-between;
    </section>
  </footer>
);
