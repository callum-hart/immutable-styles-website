import { createStyle } from 'immutable-styles';

const to_m = 999;
const from_m = 1000;

export default [
  <section className="row">
    display: flex;

    <div className="col">
      flex: 1;
    </div>
  </section>,

  <section className="row" maxWidth={to_m}>
    flex-direction: column;

    <div className="col" pseudo=":first-of-type">
      margin-bottom: var(--size-l);
    </div>
  </section>,

  <section className="row" minWidth={from_m}>
    <div className="col" pseudo=":first-of-type">
      margin-right: var(--size-l);
    </div>
  </section>,

  <div className="example-mobile-friendly-result">
    background: #F6C89A;

    <section className="row">
      <div className="col">
        background: #BFD9B2;
      </div>

      <div className="col" maxWidth={to_m}>
        min-height: 100px;
      </div>

      <div className="col" minWidth={from_m}>
        min-height: 200px;
      </div>
    </section>
  </div>
];
