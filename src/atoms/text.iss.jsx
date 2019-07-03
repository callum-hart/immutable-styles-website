import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

// TODO: define rems for font-sizes

const text = {
  small: createMixin(
    <p>
      font-size: 14px;
      font-family: 'Muli', sans-serif;
      font-weight: 100;
      color: {palette.mediumContrast};
    </p>
  )
};

export default [
  <text.small className="text-sm" />,

  <text.small className="text-sm no-stack">
    margin: 0;
  </text.small>,

  <h1>
    font-size: 50px;
    font-family: 'Muli', sans-serif;
    font-weight: 800;
  </h1>,

  <h2>
    font-size: 20px;
    font-family: 'Muli', sans-serif;
    font-weight: 600;
  </h2>
];
