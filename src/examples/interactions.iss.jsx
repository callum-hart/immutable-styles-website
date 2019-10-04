import { createStyle } from 'immutable-styles';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';

export default [
  <div className="form-field">
    margin-bottom: var(--size-m);

    <div className="field-label">
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: var(--size-l);

      <label>
        { fontSans }
        margin-left: var(--size-xs);
        color: var(--example-background);
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
      border-bottom: 3px solid #9E9E9D;
      background: #D6D5D4;
    </input>

    <input className="text-input" pseudo=":focus">
      { focusShadow }
      background: #F6F4F2;
    </input>
  </div>,

  <div className="tooltip">
    display: flex;
    align-items: center;

    <svg>
      margin: 0 var(--size-xs);
      color: #9E9E9D;
    </svg>

    <p className="tooltip-content">
      { fontSans }
      display: none;
      margin: 0 0 0 var(--size-xxs);
      padding: var(--size-xs) var(--size-s);
      color: var(--example-heading-color);
      background: var(--example-background);
    </p>
  </div>,

  <div className="tooltip" pseudo=":hover">
    <svg>
      color: var(--example-background);
    </svg>

    <p className="tooltip-content">
      display: flex;
    </p>
  </div>
];
