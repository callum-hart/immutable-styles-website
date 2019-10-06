import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default [
  <section className="band-light">
    background: {palette.highContrast};
  </section>,

  <section className="band-dark">
    background: {palette.lowContrast};
  </section>
];
