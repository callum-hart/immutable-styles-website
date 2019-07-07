import { createStyle } from 'immutable-styles';
import { width } from '../constants/breakpoints';
import { spacing } from '../constants/spacing';
import { palette } from '../constants/palette';

const footer = (
  <footer>
    padding: {spacing.xl} 0;
    background: {palette.lowContrast};

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>
  </footer>
);

const openSourceInfo = [
  <ul className="open-source-info">
    padding: 0;
    display: flex;

    <li>
      list-style: none;
      margin-right: {spacing.md};
    </li>
  </ul>,

  <ul maxWidth={width.toTablet} className="open-source-info">
    margin: 0;
    flex-direction: column;

    <li>
      margin-bottom: {spacing.sm};
    </li>
  </ul>,

  <ul minWidth={width.fromTablet} className="open-source-info">
    margin: 0 0 {spacing.sm} 0;
  </ul>
];

export default [
  footer,
  ...openSourceInfo
];
