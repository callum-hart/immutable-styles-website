import { createStyle } from 'immutable-styles';

import { to_s, from_s_to_m } from '../constants/breakpoint';
import { contrast_1, contrast_2, contrast_3, accent_2, accent_3, accent_4, accent_2__opaque } from '../constants/palette';
import { font_mono } from '../constants/typography';

export default [
  <svg className="infographic">
    box-shadow: var(--size-xs) var(--size-xs) { contrast_3 };
    width: auto;
  </svg>,

  <svg {...to_s} className="infographic">
    height: 75px;
  </svg>,

  <svg {...from_s_to_m} className="infographic">
    height: 125px;
  </svg>,

  <text className="svg-text">
    { font_mono }
    fill: { contrast_3 };
  </text>,

  <text className="svg-text hide-to-s">
    { font_mono }
    fill: { contrast_3 };
  </text>,

  <text {...to_s} className="svg-text hide-to-s">
    display: none;
  </text>,

  <rect className="fill-contrast-l">
    fill: { contrast_2 };
  </rect>,

  <path className="fill-contrast-xl">
    fill: { contrast_1 };
  </path>,

  <path className="fill-contrast-l">
    fill: { contrast_2 };
  </path>,

  <path className="fill-contrast-m">
    fill: { contrast_3 };
  </path>,

  <path className="fill-accent-2">
    fill: { accent_2 };
  </path>,

  <path className="fill-accent-3">
    fill: { accent_3 };
  </path>,

  <path className="fill-accent-4">
    fill: { accent_4 };
  </path>,

  <path className="fill-accent-2-opaque">
    fill: { accent_2__opaque };
  </path>
];