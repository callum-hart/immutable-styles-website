import { createStyle, createMixin } from 'immutable-styles';
import { to_xs, from_xs_to_s, from_s_to_m, from_m_to_l, from_l } from '../constants/breakpoint';

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
    --size-base: 0.5rem;
  </body>,

  <body {...from_xs_to_s}>
    --size-base: 0.6rem;
  </body>,

  <body {...from_s_to_m}>
    --size-base: 0.7rem;
  </body>,

  <body {...from_m_to_l}>
    --size-base: 0.8rem;
  </body>,

  <body {...from_l}>
    --size-base: 1rem;
  </body>,

  <h1>
    font-size: var(--size-xl);
    font-family: 'Muli', sans-serif;
    font-weight: 800;
  </h1>,

  <h2>
    font-size: var(--size-m);
    font-family: 'Muli', sans-serif;
    font-weight: 600;
  </h2>,

  <h3>
    font-size: var(--size-m);
    font-family: 'Muli', sans-serif;
    font-weight: 800;
  </h3>,

  <p>
    font-size: var(--size-scale);
    font-family: 'Muli', sans-serif;
    {/* font-weight: 700; */}
  </p>
];