import { createStyle, createMixin } from 'immutable-styles';

export default [
  <body>
    --font-size: 1rem;
    --font-s: calc(var(--font-size) * 1);
    --font-l: calc(var(--font-size) * 2);
    --font-xl: calc(var(--font-size) * 3.5);
  </body>,

  // Upscale all font sizes by changing base-font-size:

  // <body minWidth="600">
  //   --base-font-size: 1.5rem;
  // </body>,

  <h1>
    font-size: var(--font-xl);
    font-family: 'Muli', sans-serif;
    font-weight: 800;
  </h1>,

  <h2>
    font-size: var(--font-l);
    font-family: 'Muli', sans-serif;
    font-weight: 600;
  </h2>,

  <small>
    font-size: var(--font-s);
    font-family: 'Muli', sans-serif;
    font-weight: 100;
  </small>
];