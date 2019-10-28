const { darken, transparentize } = require('polished');

const _yellow = '#ECED69';
const _red = '#EB6A6C';
const _blue = '#40B4D2';
const _green = '#48D1A0';

const contrast_1 = '#0A0A09';
const contrast_2 = '#F7F4F2';
const contrast_3 = '#9E9E9D';
const contrast_4 = '#242322';

const accent_1 = _yellow;
const accent_2 = _red;
const accent_3 = _blue;
const accent_4 = _green;

const accent_1__opaque = transparentize(0.8, '#ECED69');
const accent_2__opaque = transparentize(0.8, '#EB6A6C');
const accent_3__opaque = transparentize(0.8, '#40B4D2');
const accent_4__opaque = transparentize(0.8, '#48D1A0');

const contrast_1__hover = darken(0.1, '#0A0A09');
const contrast_2__hover = darken(0.1, '#F7F4F2');
const contrast_3__hover = darken(0.1, '#9E9E9D');
const contrast_4__hover = darken(0.1, '#242322');

const accent_1__hover = darken(0.1, '#ECED69');
const accent_2__hover = darken(0.1, '#EB6A6C');
const accent_3__hover = darken(0.1, '#40B4D2');
const accent_4__hover = darken(0.1, '#48D1A0');

module.exports = {
  contrast_1,
  contrast_2,
  contrast_3,
  contrast_4,
  accent_1,
  accent_2,
  accent_3,
  accent_4,
  accent_1__opaque,
  accent_2__opaque,
  accent_3__opaque,
  accent_4__opaque,
  contrast_1__hover,
  contrast_2__hover,
  contrast_3__hover,
  contrast_4__hover,
  accent_1__hover,
  accent_2__hover,
  accent_3__hover,
  accent_4__hover
};
