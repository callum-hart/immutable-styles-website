import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <header>
    height: 25vh;
    min-height: 140px;
    background: {palette.lowContrast};

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    </section>
  </header>
);