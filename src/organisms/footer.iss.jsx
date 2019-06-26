import { createStyle } from 'immutable-styles';
import { spacing } from '../constants/spacing';

const footer = (
  <footer>
    padding: {spacing.xl} 0;

    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>
  </footer>
);

const projectInfo = (
  <ul className="project-info">
    margin: 0;
    padding: 0;
    display: flex;

    <li>
      list-style: none;
      margin-right: {spacing.md};
    </li>
  </ul>
);

const siteInfo = (
  <p className="site-info">
    margin: {spacing.sm} 0 0 0;
  </p>
);

export default [
  footer,
  projectInfo,
  siteInfo
];
