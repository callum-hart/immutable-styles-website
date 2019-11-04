import { createStyle } from 'immutable-styles';

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
      align-items: center;
      display: flex;

      <div>
        flex: 1;
        padding-left: var(--size-xl);
      </div>
    </section>
  </div>
];
