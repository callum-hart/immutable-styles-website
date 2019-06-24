import { createStyle } from 'immutable-styles';

export default [
  <div className="button-group">
    display: flex;

    <a className="button-secondary">
      margin-left: 20px;
    </a>
  </div>,

  <div maxWidth="500" className="button-group">
    flex-direction: column;
    align-items: center;
  </div>
];