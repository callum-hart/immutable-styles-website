import { createStyle } from 'immutable-styles';

import { contrast_l, contrast_s } from '../constants/palette';

export default [
  <section className="band-light">
    background: { contrast_l };
  </section>,

  <section className="band-dark">
    background: { contrast_s };
  </section>
];
