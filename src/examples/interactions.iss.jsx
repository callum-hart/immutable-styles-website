import { createStyle } from 'immutable-styles';

export default [
  <div className="form-field">
    <div className="field-label">
      display: flex;

      <label>
        margin-right: var(--size-xs);
        font-size: var(--size-scale);
        font-family: 'Muli', sans-serif;
        font-weight: 700;
      </label>
    </div>

    <input className="text-input">
      width: 100%;
      margin-top: var(--size-xs);
      padding: var(--size-xs);
      box-sizing: border-box;
      font-size: var(--size-scale);
      border: 1px solid #9E9E9D;
      border-radius: 5px;
    </input>
  </div>,

  <div className="tooltip">
    display: flex;

    <p className="tooltip-content">
      display: none;
      margin: 0;
      font-family: 'Muli', sans-serif;
      background: var(--example-background);
      color: var(--example-heading-color);
    </p>
  </div>,

  <div className="tooltip" pseudo=":hover">
    <p className="tooltip-content">
      display: block;
    </p>
  </div>
];
