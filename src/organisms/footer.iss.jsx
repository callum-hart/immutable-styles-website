import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <footer>
    padding: var(--size-l) 0;
    background: {palette.lowContrast};

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>

    <p>
      text-align: center;
    </p>
  </footer>
);
