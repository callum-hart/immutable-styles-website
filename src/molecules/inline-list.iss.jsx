import { createStyle } from 'immutable-styles';
import { to_s } from '../constants/breakpoint';

export default [
  <ul className="inline-list">
    padding: 0;
    display: flex;

    <li>
      list-style: none;
      margin-right: var(--size-s);
    </li>
  </ul>,

  <ul {...to_s} className="inline-list">
    margin: 0;
    flex-direction: column;

    <li>
      margin-bottom: var(--size-s);
    </li>
  </ul>
];
