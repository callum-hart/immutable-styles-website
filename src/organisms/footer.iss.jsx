import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <footer>
    padding: var(--spacing-xl) 0;
    background: {palette.lowContrast};

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>
  </footer>
);
