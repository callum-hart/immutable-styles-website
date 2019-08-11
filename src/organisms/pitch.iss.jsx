import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';
import { to_s, from_s } from '../constants/breakpoint';

export default (
  <div className="pitch">
    <section className="container">
      display: flex;
      align-items: center;

      <div>
        flex: 1;
      </div>
    </section>

    <section {...to_s} className="container">
      <div className="infographic">
        display: flex;
        justify-content: center;
        width: 170px;
        padding-right: var(--size-l);
      </div>
    </section>

    <section {...to_s} pseudo=":nth-child(odd)" className="container">
      flex-flow: row-reverse;
    </section>

    <section {...from_s} className="container">
      <div className="infographic">
        flex: 1;
        display: flex;
        justify-content: center;
      </div>
    </section>

    <section {...from_s} pseudo=":nth-child(odd)" className="container">
      <div className="infographic">
        padding-left: var(--size-xl);
      </div>
    </section>
  </div>
);