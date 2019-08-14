import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_s, from_s } from '../constants/breakpoint';

export default [
  <div className="feature">
    padding-bottom: var(--size-xl);
  </div>,

  <div {...to_s} className="feature">
    padding-top: var(--size-xl);
  </div>,

  <div {...from_s} className="feature">
    <section className="container">
      display: flex;
      align-items: center;

      <div>
        padding-left: var(--size-xl);
      </div>
    </section>
  </div>,

  <div pseudo=":nth-child(odd)" className="feature">
    background-color: {palette.lowContrast};

    <section className="container">
      <div>
        <h3>
          color: {palette.highContrast};
        </h3>
      </div>
    </section>
  </div>
];
