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
        width: 100%;
      </div>
    </section>

    <section {...to_s} pseudo=":nth-child(even)" className="container">
      flex-direction: column;
    </section>

    <section {...to_s} pseudo=":nth-child(odd)" className="container">
      flex-direction: column-reverse;
    </section>

    <section {...from_s} className="container">
      <div>
        <p>
          text-align: justify;
        </p>
      </div>

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