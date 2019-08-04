import { createStyle, createMixin } from 'immutable-styles';

export default [
  <body>
    --size-base: 1rem;
    --size-ratio: 1.4;
    --size-scale: calc(0.1vw + 1em);
    --size-xs: calc(var(--size-base) / var(--size-ratio));
    --size-s: calc(var(--size-base) * var(--size-ratio));
    --size-m: calc(var(--size-base) * var(--size-ratio) * var(--size-ratio));
    --size-l: calc(var(--size-base) * var(--size-ratio) * var(--size-ratio) * var(--size-ratio));
    --size-xl: calc(var(--size-base) * var(--size-ratio) * var(--size-ratio) * var(--size-ratio) * var(--size-ratio));
  </body>,

  // Upscale all font sizes by changing base-font-size:

  // <body minWidth="600">
  //   --base-font-size: 1.5rem;
  // </body>,

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
    font-size: var(--size-l);
    font-family: 'Muli', sans-serif;
    font-weight: 800;
  </h3>,

  <p>
    font-size: var(--size-scale);
    font-family: 'Muli', sans-serif;
    font-weight: 700;
  </p>
];