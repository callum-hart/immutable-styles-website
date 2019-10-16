import { createStyle } from 'immutable-styles';

import { focusShadow } from '../constants/accessibility';
import { contrast_l, contrast_m, contrast_s } from '../constants/palette';
import { fontSans } from '../constants/typography';

export default [
  <div className="form-field">
    margin-bottom: var(--size-m);

    <div className="field-label">
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: var(--size-xs);

      <label>
        { fontSans }
        color: { contrast_m };
      </label>
    </div>

    <input className="text-input">
      { fontSans }
      background: #D6D5D4;
      border-bottom: 3px solid { contrast_m };
      border-left: none;
      border-right: none;
      border-top: none;
      box-sizing: border-box;
      color: { contrast_s };
      padding: var(--size-xs);
      width: 100%;
    </input>

    <input className="text-input" pseudo=":focus">
      { focusShadow }
      background: { contrast_l };
      border-bottom-color: { contrast_l };
    </input>
  </div>,

  <div className="tooltip">
    align-items: center;
    display: flex;
    position: relative;

    <svg>
      color: { contrast_m };
    </svg>

    <p className="tooltip-content">
      { fontSans }
      background: { contrast_m };
      color: { contrast_s };
      display: none;
      line-height: var(--size-m);
      margin: 0;
      padding: 0 var(--size-s);
      position: absolute;
      right: var(--size-m);
      white-space: nowrap;
    </p>
  </div>,

  <div className="tooltip" pseudo=":hover">
    <p className="tooltip-content">
      display: flex;
    </p>
  </div>
];
