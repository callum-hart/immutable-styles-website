import { createStyle } from 'immutable-styles';
import { width } from '../constants/breakpoint';

export default [
  <div className="button-group">
    display: flex;
  </div>,

  <div maxWidth={width.toTablet} className="button-group">
    flex-direction: column;

    <a className="button-secondary">
      margin-top: var(--size-s);
    </a>
  </div>,

  <div minWidth={width.fromTablet} className="button-group">
    <a className="button-secondary">
      margin-left: var(--size-m);
    </a>
  </div>
];