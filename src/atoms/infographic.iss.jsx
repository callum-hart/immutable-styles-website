import { createStyle } from 'immutable-styles';

import { to_s, from_s_to_m } from '../constants/breakpoint';
import { contrast_l, contrast_m, contrast_s, accent_1, accent_2, accent_3, accent_4, accent_2__opaque } from '../constants/palette';
import { fontMono } from '../constants/typography';

export default [
  <svg className="infographic">
    box-shadow: var(--size-xs) var(--size-xs) { contrast_m };
    width: auto;
  </svg>,

  <svg {...to_s} className="infographic">
    height: 75px;
  </svg>,

  <svg {...from_s_to_m} className="infographic">
    height: 125px;
  </svg>,

  // TODO: handle text colors
  <text className="svg-text">
    { fontMono }
  </text>,

  <text className="svg-text hide-to-s">
    { fontMono }
  </text>,

  <text {...to_s} className="svg-text hide-to-s">
    display: none;
  </text>,

  <rect className="fill-contrast-l">
    fill: { contrast_l };
  </rect>,

  // TODO: add color to palette
  <path className="fill-contrast-dark">
    fill: #0B0B0B;
  </path>,

  <path className="fill-contrast-l">
    fill: { contrast_l };
  </path>,

  <path className="fill-contrast-m">
    fill: { contrast_m };
  </path>,

  <path className="fill-accent-2">
    fill: { accent_2 };
  </path>,

  <path className="fill-accent-2-opaque">
    fill: { accent_2__opaque };
  </path>
];