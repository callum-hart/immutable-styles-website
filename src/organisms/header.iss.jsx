import { createStyle } from 'immutable-styles';
import { spacing } from '../constants/spacing';
import { palette } from '../constants/palette';

const header = (
  <header>
    padding: {spacing.xl} 0;
    background: {palette.lowContrast};

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>
  </header>
);

const logo = (
  <div className="logo">
    display: flex;
    align-items: center;

    <object className="logo-image">
      width: 80px;
    </object>

    <div className="logo-text">
      <p>
        color: {palette.mediumContrast};
      </p>
      <p pseudo=":first-of-type">
        margin: 0 0 0 6px;
      </p>
      <p pseudo=":last-of-type">
        margin: 0;
      </p>
    </div>
  </div>
);

export default [
  header,
  logo
];