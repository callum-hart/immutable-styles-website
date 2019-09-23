import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_s, from_s } from '../constants/breakpoint';

export default [
  // TODO: rename variables to something less specific (i.e: --mode-color, --mode-background)

  <div pseudo=":nth-child(even)" className="feature">
    --feature-background: {palette.highContrast};
    --feature-heading-color: {palette.lowContrast};
  </div>,

  <div pseudo=":nth-child(odd)" className="feature">
    --feature-background: {palette.lowContrast};
    --feature-heading-color: {palette.highContrast};
  </div>,

  <div className="feature">
    padding-bottom: var(--size-xl);
    background-color: var(--feature-background);

    <section className="container">
      <div>
        <h3>
          color: var(--feature-heading-color);
        </h3>
      </div>
    </section>
  </div>,

  <div {...to_s} className="feature">
    padding-top: var(--size-xl);
  </div>,

  <div {...from_s} className="feature">
    <section className="container">
      display: flex;
      align-items: center;

      <div pseudo=":last-of-type">
        padding-left: var(--size-xl);
      </div>
    </section>
  </div>
];
