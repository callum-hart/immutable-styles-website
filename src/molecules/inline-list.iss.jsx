import { createStyle } from 'immutable-styles';
import { width } from '../constants/breakpoint';

export default [
  <ul className="inline-list">
    padding: 0;
    display: flex;

    <li>
      list-style: none;
      margin-right: var(--spacing-s);
    </li>
  </ul>,

  <ul maxWidth={width.toTablet} className="inline-list">
    margin: 0;
    flex-direction: column;

    <li>
      margin-bottom: var(--spacing-s);
    </li>
  </ul>,

  <ul minWidth={width.fromTablet} className="inline-list">
    margin: 0 0 var(--spacing-s) 0;
  </ul>
];
