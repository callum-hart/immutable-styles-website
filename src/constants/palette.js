const { darken } = require('polished');

// OLD --

const primaryCta     = '#ECED69';
const secondaryCta   = '#F6F4F2'; // TODO: change color
const tertiaryCta    = '#EB6A6C';
// const quaternaryCta  = ''; // The blue?
const highContrast   = '#F6F4F2'; // TODO: change color
const lowContrast    = '#242322';
const mediumContrast = '#9E9E9D';


// NEW --

const _yellow = '#ECED69'; // primaryCta
const _red = '#EB6A6C'; // tertiaryCta
const _blue = '#40B4D2';
const _green = '#4FD0A1';

const contrast_l = '#F7F4F2'; // highContrast
const contrast_m = '#9E9E9D'; // mediumContrast
const contrast_s = '#242322'; // lowContrast

const accent_1 = _yellow;
const accent_2 = _red;
const accent_3 = _blue;
const accent_4 = _green;

const contrast_l__hover = darken(0.1, '#F7F4F2');
const contrast_m__hover = darken(0.1, '#9E9E9D');
const accent_1__hover = darken(0.1, '#ECED69');
const accent_2__hover = darken(0.1, '#EB6A6C');

module.exports = {
  palette: {
    primaryCta,
    secondaryCta,
    tertiaryCta,
    highContrast,
    lowContrast,
    mediumContrast
  },
  contrast_l,
  contrast_m,
  contrast_s,
  accent_1,
  accent_2,
  accent_3,
  accent_4,
  contrast_l__hover,
  contrast_m__hover,
  accent_1__hover,
  accent_2__hover
};
