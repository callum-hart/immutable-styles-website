import { createStyle } from 'immutable-styles';

/*
TODO: could show form field styles in a new tab

 -----------------------------------------
| Result | Tooltip.iss.jx | Field.iss.jsx |
 -----------------------------------------
*/

export default [
  <div className="form-field">
    margin-bottom: var(--size-m);

    <div className="field-label">
      display: flex;
      align-items: center;
      min-height: var(--size-l);

      <label>
        font-size: var(--size-scale);
        font-family: 'Muli', sans-serif;
        font-weight: 700;
        color: var(--example-background);
      </label>
    </div>

    <input className="text-input">
      width: 100%;
      margin-top: var(--size-xxs);
      padding: var(--size-xs);
      box-sizing: border-box;
      font-size: var(--size-scale);
      border: 1px solid #9E9E9D;
      border-radius: 5px;
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
      display: none;
      margin: 0 0 0 var(--size-xxs);
      padding: 6px 12px;
      border-radius: 4px;
      font-family: 'Muli', sans-serif;
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
