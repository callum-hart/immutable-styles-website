import { createStyle } from 'immutable-styles';
import { focusShadow } from '../constants/accessibility';
import { fontSans } from '../constants/typography';
import { palette } from '../constants/palette';

export default [
  <div className="form-field">
    margin-bottom: var(--size-m);

    <div className="field-label">
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--size-xs);

      <label>
        { fontSans }
        color: {palette.mediumContrast};
      </label>
    </div>

    <input className="text-input">
      { fontSans }
      width: 100%;
      padding: var(--size-xs);
      box-sizing: border-box;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 3px solid {palette.mediumContrast};
      background: #D6D5D4;
      color: {palette.lowContrast};
    </input>

    <input className="text-input" pseudo=":focus">
      { focusShadow }
      background: {palette.highContrast};
      border-bottom-color: {palette.highContrast};
    </input>
  </div>,

  <div className="tooltip">
    display: flex;
    align-items: center;
    position: relative;

    <svg>
      color: {palette.mediumContrast};
    </svg>

    <p className="tooltip-content">
      { fontSans }
      display: none;
      margin: 0;
      padding: 0 var(--size-s);
      color: {palette.lowContrast};
      background: {palette.mediumContrast};
      position: absolute;
      white-space: nowrap;
      right: var(--size-m);
      line-height: var(--size-m);
    </p>
  </div>,

  <div className="tooltip" pseudo=":hover">
    <p className="tooltip-content">
      display: flex;
    </p>
  </div>
];
