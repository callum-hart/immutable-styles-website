import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

export default [
  // <h1>
  //   font-size: 50px;
  //   font-family: 'Muli', sans-serif;
  //   font-weight: 800;
  // </h1>,

  <h2>
    font-size: 20px;
    font-family: 'Muli', sans-serif;
    font-weight: 600;
  </h2>,

  <p className="text-sm no-stack">
    font-size: 14px;
    font-family: 'Muli', sans-serif;
    font-weight: 100;
    margin: 0;
    color: {palette.mediumContrast};
  </p>
];