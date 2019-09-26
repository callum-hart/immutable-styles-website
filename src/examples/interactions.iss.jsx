import { createStyle } from 'immutable-styles';

/*
TODO: could show form field styles in a new tab

 -----------------------------------------
| Result | Tooltip.iss.jx | Field.iss.jsx |
 -----------------------------------------
*/

export default [
  <div className="form-field">
    <div className="field-label">
      display: flex;
      align-items: center;

      <label>
        margin-right: var(--size-xs);
        font-size: var(--size-scale);
        font-family: 'Muli', sans-serif;
        font-weight: 700;
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

    <p className="tooltip-content">
      display: none;
      margin: 0 0 0 var(--size-xxs);
      padding: var(--size-xxs) var(--size-xs);
      border-radius: 4px;
      font-family: 'Muli', sans-serif;
      color: var(--example-heading-color);
      background: var(--example-background);
    </p>
  </div>,

  <div className="tooltip" pseudo=":hover">
    <p className="tooltip-content">
      display: flex;
    </p>
  </div>
];
