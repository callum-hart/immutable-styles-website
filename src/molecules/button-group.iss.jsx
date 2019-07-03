import { createStyle } from 'immutable-styles';
import { width } from '../constants/breakpoints';
import { spacing } from '../constants/spacing';

export default [
  <div className="button-group">
    display: flex;
  </div>,

  <div maxWidth={width.toTablet} className="button-group">
    flex-direction: column;

    <a className="button-secondary">
      margin-top: {spacing.sm};
    </a>
  </div>,

  <div minWidth={width.fromTablet} className="button-group">
    <a className="button-secondary">
      margin-left: {spacing.md};
    </a>
  </div>
];