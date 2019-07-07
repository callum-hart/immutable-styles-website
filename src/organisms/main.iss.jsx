import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default (
  <main>
    background: {palette.highContrast};

    <div className="content">
      <section className="container" pseudo=":nth-child(even)">
        background: {palette.lowContrast};
      </section>
    </div>
  </main>
);