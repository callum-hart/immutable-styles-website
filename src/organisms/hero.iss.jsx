import { createStyle } from 'immutable-styles';
import { width } from '../constants/breakpoints';
import { spacing } from '../constants/spacing';
import { palette } from '../constants/palette';
import { heading } from '../constants/typography';

const hero = (
  <div className="hero">
    padding-top: {spacing.l};
    background: {palette.lowContrast};

    <section className="container">
      <heading.primary>
        margin: 0;
        color: {palette.highContrast};
      </heading.primary>,

      <h2>
        margin: {spacing.md} 0;
        color: {palette.mediumContrast};
      </h2>
    </section>

    <svg className="hero-polygon">
      display: inherit;
      width: 100%;
      height: 5vw;
      fill: {palette.highContrast};
    </svg>
  </div>
);

const heroLinks = (
  <div className="hero-links">
    display: flex;

    <a className="link" pseudo=":last-of-type">
      margin-left: {spacing.md};
    </a>
  </div>
);

export default [
  hero,
  heroLinks
];
