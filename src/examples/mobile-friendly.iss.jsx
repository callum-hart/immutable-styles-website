import { createStyle } from 'immutable-styles';

const tablet = '768';
const desktop = '769';

export default [
  <button className="nav-link" maxWidth={tablet}>
    font-size: 1.2rem;
    padding: 16px;
  </button>,

  <button className="nav-link" minWidth={desktop}>
    font-size: 1rem;
    padding: 12px;
  </button>
];
