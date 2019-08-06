import { createStyle } from 'immutable-styles';
import { to_xs, from_xs } from '../constants/breakpoint';

export default [
  <div className="button-group">
    display: flex;
  </div>,

  <div {...to_xs} className="button-group">
    flex-direction: column;

    <a className="button-secondary">
      margin-top: var(--size-s);
    </a>
  </div>,

  <div {...from_xs} className="button-group">
    <a className="button-secondary">
      margin-left: var(--size-m);
    </a>
  </div>
];