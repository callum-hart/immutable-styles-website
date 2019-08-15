import { createStyle } from 'immutable-styles';
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
      </div>
    </section>
  </div>
];
