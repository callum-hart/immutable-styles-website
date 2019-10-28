import { createStyle } from 'immutable-styles';

export default (
  <div className="example">
    overflow: auto;
    padding-bottom: var(--size-xl);
    position: relative;

    <section className="container">
      min-width: 1000px;
      display: flex;

      <div pseudo=":first-of-type">
        max-width: 430px;
        padding-right: var(--size-xl);
      </div>

      <div pseudo=":last-of-type">
        margin-top: var(--size-l);
        flex: 1;
        min-width: 450px;
      </div>
    </section>
  </div>
);
