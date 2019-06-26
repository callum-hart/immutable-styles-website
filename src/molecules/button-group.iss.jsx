import { createStyle } from 'immutable-styles';
import { spacing } from '../constants/spacing';

export default [
  <div className="button-group">
    display: flex;
  </div>,

  <div maxWidth="600" className="button-group">
    flex-direction: column;

    <a className="button-secondary">
      margin-top: {spacing.sm};
    </a>
  </div>,

  <div minWidth="601" className="button-group">
    <a className="button-secondary">
      margin-left: {spacing.md};
    </a>
  </div>
];