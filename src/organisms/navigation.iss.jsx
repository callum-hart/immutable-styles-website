import { createStyle } from 'immutable-styles';
import { mediumContrast } from '../constants/palette';

const nav = (
  <nav>
    <section className="container">
      display: flex;
      justify-content: space-between;
      align-items: center;
    </section>
  </nav>
);

const logo = (
  <div className="logo">
    display: flex;
    align-items: center;

    <object className="logo__image">
      width: 80px;
    </object>

    <div className="logo__text">
      <p>color: {mediumContrast};</p>
      <p pseudo=":first-of-type">
        margin: 0 0 0 6px;
      </p>
      <p pseudo=":last-of-type">
        margin: 0;
      </p>
    </div>
  </div>
);

export default [
  nav,
  logo
];