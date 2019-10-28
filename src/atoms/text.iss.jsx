import { createStyle, createMixin } from 'immutable-styles';

import { to_xs, from_xs_to_s, from_s_to_m, from_m_to_l, from_l } from '../constants/breakpoint';
import { contrast_2, contrast_3, contrast_4 } from '../constants/palette';
import { font_sans, font_sans_xl, font_sans_m } from '../constants/typography';

const mixins = {
  h3: createMixin(
    <h3>
      { font_sans_m }
      line-height: var(--size-ratio);
      margin-bottom: 0;
      margin-top: var(--size-l);
    </h3>
  )
};

export default [
  <body>
    --size-ratio: 1.4;
    --size-scale: calc(0.1vw + 1em);
    --size-xs: calc(var(--size-base) / var(--size-ratio));
    --size-s: calc(var(--size-base) * var(--size-ratio));
    --size-m: calc(var(--size-base) * var(--size-ratio) * var(--size-ratio));
    --size-l: calc(var(--size-base) * var(--size-ratio) * var(--size-ratio) * var(--size-ratio));
    --size-xl: calc(var(--size-base) * var(--size-ratio) * var(--size-ratio) * var(--size-ratio) * var(--size-ratio));
  </body>,

  <body {...to_xs}>
    --size-base: 0.6rem;
  </body>,

  <body {...from_xs_to_s}>
    --size-base: 0.7rem;
  </body>,

  <body {...from_s_to_m}>
    --size-base: 0.8rem;
  </body>,

  <body {...from_m_to_l}>
    --size-base: 0.9rem;
  </body>,

  <body {...from_l}>
    --size-base: 1rem;
  </body>,

  <h1>
    { font_sans_xl }
  </h1>,

  <h2>
    { font_sans_m }
  </h2>,

  <mixins.h3 className="heading-light">
    color: { contrast_2 };
  </mixins.h3>,

  <mixins.h3 className="heading-dark">
    color: { contrast_4 };
  </mixins.h3>,

  <p>
    { font_sans }
    color: { contrast_3 };
    line-height: var(--size-ratio);
    margin-bottom: 0;
    margin-top: var(--size-m);
  </p>
];