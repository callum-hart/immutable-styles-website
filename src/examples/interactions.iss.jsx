import { createStyle } from 'immutable-styles';

export default [
  <div className="tooltip">
    position: relative;

    <p className="content">
      display: none;
      position: absolute;
      width: 200px;
    </p>
  </div>,

  <div className="tooltip" pseudo=":hover">
    <p className="content">
      display: block;
    </p>
  </div>
];