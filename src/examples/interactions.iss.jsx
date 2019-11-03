import { createStyle } from 'immutable-styles';

import { focus_shadow } from '../constants/accessibility';
import { contrast_2, contrast_3, contrast_4 } from '../constants/palette';
import { font_sans } from '../constants/typography';

export default [
  <div className="form-field">
    margin-bottom: var(--size-m);

    <div className="field-label">
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: var(--size-xs);

      <label>
        { font_sans }
        color: { contrast_3 };
      </label>
    </div>

    <input className="text-input">
      { font_sans }
      background: #C3C9C3;
      border-bottom: 3px solid { contrast_3 };
      border-left: none;
      border-right: none;
      border-top: none;
      box-sizing: border-box;
      color: { contrast_4 };
      padding: var(--size-xs);
      width: 100%;
    </input>

    <input className="text-input" pseudo=":focus">
      { focus_shadow }
      background: { contrast_2 };
      border-bottom-color: { contrast_2 };
    </input>
  </div>,

  <div className="tooltip">
    align-items: center;
    display: flex;
    position: relative;

    <svg>
      color: { contrast_3 };
    </svg>

    <p className="tooltip-content">
      { font_sans }
      background: { contrast_3 };
      color: { contrast_4 };
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
