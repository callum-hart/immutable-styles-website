import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { from_s } from '../constants/breakpoint';

export default [
  <div className="example">
    padding-bottom: var(--size-xl);
    background: #0B0B0B; {/* TODO: decide on bg color*/}
  </div>,

  <div {...from_s} className="example">
    <section className="container">
      display: flex;

      <div>
        flex: 1;

        <h3>
          color: {palette.highContrast};
        </h3>
      </div>

      <div pseudo=":first-of-type">
        max-width: 428px; {/* Same width as infographics above? */}
      </div>
    </section>
  </div>
];
