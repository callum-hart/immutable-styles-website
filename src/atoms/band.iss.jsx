import { createStyle } from 'immutable-styles';

import { contrast_2, contrast_4 } from '../constants/palette';

export default [
  <section className="band-light">
    background: { contrast_2 };
  </section>,

  <section className="band-dark">
    background: { contrast_4 };
  </section>
];
